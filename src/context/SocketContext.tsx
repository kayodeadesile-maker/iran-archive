import { useAppDispatch, useAppSelector } from "@/hooks/redux/redux";
import type { Token } from "@/types/auth/auth";
import { SocketEvents } from "@/types/enums/socket-events";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import SocketIo from "socket.io-client";
import {
  setNotification,
  updateNotificationStatus,
  setUnreadCount,
} from "@/features/messaging/notification.reducer";
import { MessagingApiSlice } from "@/features/messaging/message.slice";

interface ISocketInstance {
  socket: ReturnType<typeof SocketIo> | null;
  connected: boolean;
  onConnected: () => void;
  onDisconnected: () => void;
}

const SocketConext = createContext<ISocketInstance>({
  socket: null,
  connected: false,
  onConnected: () => {},
  onDisconnected: () => {},
});

const getSocket = (tokens: Token | null) => {
  const env = import.meta.env;
  const url =
    env.MODE === "production" ? env.VITE_API_SOCKET_URL_PROD : env.VITE_API_SOCKET_URL_DEV;

  return SocketIo(url, {
    auth: {
      token: tokens?.accessToken, // Send only the access token
      refreshToken: tokens?.refreshToken, // Optional: for server-side refresh
    },
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    timeout: 20000,
    autoConnect: true,
    transports: ["websocket"],
  });
};

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [socket, setSocket] = useState<ReturnType<typeof SocketIo> | null>(null);
  const { tokens } = useAppSelector((state) => state.auth.data);
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [connected, setConnected] = useState<boolean>(false);
  const userRole = useAppSelector((state) => state.auth.data.user?.role);
  const [reconnecting, setReconnecting] = useState<boolean>(false);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>(null);
  const socketRef = useRef<ReturnType<typeof SocketIo> | null>(null);

  console.log(reconnecting, "reconnecting");

  const dispatch = useAppDispatch();

  const onConnected = useCallback(() => {
    setConnected(true);
    setReconnecting(false);

    // Clear any pending reconnect timeout
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
  }, []);

  const onDisconnected = useCallback(() => {
    setReconnecting(true);
    setConnected(false);
  }, []);

  const onSocketError = useCallback((error: any) => {
    console.error("Socket error:", error);
    setConnected(false);

    // Handle specific authentication errors
    if (
      error.message?.includes("Authentication failed") ||
      error.message?.includes("Unauthorized")
    ) {
      console.warn("🚫 Authentication failed, cleaning up socket");
      if (socketRef.current) {
        socketRef.current.disconnect();
        setSocket(null);
        socketRef.current = null;
      }
    }
  }, []);

  const handleNewAdminRequest = useCallback(
    (data: any) => {
      dispatch(
        setNotification({
          _id: data._id || data.data?._id,
          data: data.data || data,
          type: "NEW_REQUEST",
          isRead: false,
          createdAt: data.createdAt || new Date().toISOString(),
        })
      );

      dispatch(MessagingApiSlice.util.invalidateTags(["MessageNotification", "UnreadCount"]));

      // Show browser notification if permission granted
      if (Notification.permission === "granted") {
        new Notification("New Request Message", {
          body: `${data.data?.userId?.name || "A user"} sent a new request: ${data.data?.action}`,
          icon: "/favicon.ico",
          tag: "new-request",
        });
      }
    },
    [dispatch]
  );

  const handleStatusUpdate = useCallback(
    (data: any) => {
      console.log("📝 Request status updated:", data);

      dispatch(
        updateNotificationStatus({
          notificationId: data._id || data.requestId,
          status: data.status,
          adminNotes: data.adminNotes,
        })
      );

      // Invalidate relevant queries
      dispatch(MessagingApiSlice.util.invalidateTags(["MessageNotification"]));
    },
    [dispatch]
  );

  const handleAdminNotificationCount = useCallback(
    (count: number) => {
      console.log("🔢 Admin notification count:", count);
      dispatch(setUnreadCount(count));
    },
    [dispatch]
  );

  const handleOnNewAdminMessaegBroadCast = useCallback(
    (data: any) => {
      console.log(data);
      dispatch(
        setNotification({
          _id: data._id || data.data?._id,
          data: data.data || data,
          type: data?.type || "NEW_REQUEST",
          isRead: data?.isRead ? true : false,
          createdAt: data.createdAt || new Date().toISOString(),
        })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    if (!socket) return;

    console.log(socket.connected);

    socketRef.current = socket;

    socket?.on(SocketEvents.CONNECTED_EVENT, onConnected);
    socket?.on(SocketEvents.DISCONNECTED_EVENT, onDisconnected);
    socket?.on(SocketEvents.SOCKET_ERROR_EVENT, onSocketError);
    socket.on(SocketEvents.NEW_ADMIN_REQUEST, handleNewAdminRequest);
    socket.on(SocketEvents.REQUEST_STATUS_UPDATE, handleStatusUpdate);
    socket.on(SocketEvents.ADMIN_NOTIFICATION_COUNT, handleAdminNotificationCount);
    socket.on(SocketEvents.ADMIN_MESSAGE_BROADCAST, handleOnNewAdminMessaegBroadCast);

    socket.on("connect", () => {
      if (["ADMIN", "MODERATOR"].includes(userRole)) {
        socket.emit(SocketEvents.JOIN_ADMIN_ROOM);
      } else if (userRole === "USER") {
        socket.emit(SocketEvents.JOIN_USER_ROOM);
      }
    });

    return () => {
      socket?.off(SocketEvents.CONNECTED_EVENT, onConnected);
      socket?.off(SocketEvents.SOCKET_ERROR_EVENT, onSocketError);
      socket.off(SocketEvents.NEW_ADMIN_REQUEST, handleNewAdminRequest);
      socket.off(SocketEvents.REQUEST_STATUS_UPDATE, handleStatusUpdate);
      socket.off(SocketEvents.ADMIN_NOTIFICATION_COUNT, handleAdminNotificationCount);
      socket?.off(SocketEvents.DISCONNECTED_EVENT, onDisconnected);
      socket?.off("connect");
      socket?.off(SocketEvents.ADMIN_MESSAGE_BROADCAST, handleOnNewAdminMessaegBroadCast);
    };
  }, [socket, onConnected, onDisconnected]);

  useEffect(() => {
    // Clean up existing socket
    if (socketRef.current) {
      console.log("🧹 Cleaning up existing socket");
      socketRef.current.disconnect();
      socketRef.current = null;
      setSocket(null);
      setConnected(false);
      setReconnecting(false);
    }

    // Only create socket if authenticated with valid tokens
    if (isAuthenticated && tokens?.accessToken) {
      console.log("🚀 Initializing new socket connection");
      const newSocket = getSocket(tokens);

      if (newSocket) {
        setSocket(newSocket);

        // Connect after a small delay to ensure proper setup
        setTimeout(() => {
          if (newSocket && !newSocket.connected) {
            newSocket.connect();
          }
        }, 100);
      }
    } else {
      console.log("❌ No valid authentication, skipping socket initialization");
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [tokens?.accessToken, isAuthenticated]);

  return (
    <SocketConext.Provider
      value={{
        socket,
        connected,
        onConnected: () => socket?.connect(),
        onDisconnected: () => socket?.disconnect(),
      }}
    >
      {children}
    </SocketConext.Provider>
  );
};

export const useSocket = () => useContext(SocketConext);
