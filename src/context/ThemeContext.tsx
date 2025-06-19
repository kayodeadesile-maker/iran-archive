import React, { createContext, useCallback, useEffect, useRef, useState } from "react";
import { LocalStorage } from "@/utils";

interface ThemeContextInterface {
  activeMode: boolean;
  activateTheme: (theme: string) => void;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string | null>(LocalStorage.get("theme"));
  const systemListenersRef = useRef<Array<() => void>>([]);
  const dark = "dark";
  const light = "light";

  const defaultTheme = light;
  const [activeMode, setActiveMode] = useState(() => {
    const storedTheme = LocalStorage.get("theme");
    if (storedTheme) return storedTheme === theme;

    return window.matchMedia(`prefers-color-scheme:${dark}`).matches;
  });

  const documentEle = window.document.documentElement;

  const activateTheme = useCallback(
    (theme: string) => {
      documentEle.classList.remove(dark, light);
      documentEle.classList.toggle(theme);

      setActiveMode(theme === dark);

      if (theme !== null) {
        LocalStorage.set("theme", theme);
      }
    },
    [dark, documentEle.classList, light, theme]
  );

  const clearSystemListeners = useCallback(() => {
    systemListenersRef.current.forEach((cleanup) => cleanup());
    systemListenersRef.current = [];
  }, []);

  const setupSystemListeners = useCallback(() => {
    const darkMatcher = window.matchMedia(`prefers-color-scheme:${dark}`);
    const lightMatcher = window.matchMedia(`prefers-color-scheme:${light}`);

    const handleDarkChange = (event: MediaQueryListEvent) => {
      if (event.matches && theme === null) {
        activateTheme(dark);
      }
    };

    const handleLightChange = (event: MediaQueryListEvent) => {
      if (event.matches && theme === null) {
        activateTheme(light);
      }
    };

    darkMatcher.addEventListener("change", handleDarkChange);
    lightMatcher.addEventListener("change", handleLightChange);

    systemListenersRef.current.push(
      () => darkMatcher.removeEventListener("change", handleDarkChange),
      () => lightMatcher.removeEventListener("change", handleDarkChange)
    );
  }, [activateTheme, dark, light, theme]);

  useEffect(() => {
    clearSystemListeners();

    if (theme === dark) {
      activateTheme(dark);
    } else if (theme === light) {
      activateTheme(light);
    } else if (theme === null) {
      const prefersDark = window.matchMedia(`prefers-color-scheme:${dark}`).matches;
      const prefersLight = window.matchMedia(`prefers-color-scheme:${light}`).matches;

      if (prefersDark) {
        activateTheme(dark);
      } else if (prefersLight) {
        activateTheme(light);
      } else {
        activateTheme(defaultTheme);
      }

      setupSystemListeners();
    }

    return clearSystemListeners;
  }, [activateTheme, clearSystemListeners, setupSystemListeners, dark, light, defaultTheme, theme]);

  const handleSetTheme = useCallback(
    (newTheme: string | null) => {
      setTheme(newTheme);

      if (newTheme === null) {
        LocalStorage.remove("theme");
      } else {
        LocalStorage.set("theme", newTheme);
        clearSystemListeners();
      }
    },
    [clearSystemListeners]
  );

  return (
    <ThemeContext.Provider value={{ setTheme: handleSetTheme, activateTheme, activeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

{
  /**
  
   const preferTheme = (theme: string) => `prefers-color-scheme:${theme}`;
      console.log(preferTheme);

      if (window.matchMedia(preferTheme(dark)).matches) {
        console.log(window.matchMedia(preferTheme(dark)).matches);
        activateTheme(dark);
      } else if (window.matchMedia(preferTheme(light)).matches) {
        console.log(window.matchMedia(preferTheme(light)).matches);
        activateTheme(light);
      } else {
        activateTheme(defaultTheme);
      }

      window.matchMedia(preferTheme(dark)).addEventListener("change", (event) => {
        if (event.matches) {
          console.log(event.matches, dark);
          activateTheme(dark);
        }
      });

      window.matchMedia(preferTheme(light)).addEventListener("change", (event) => {
        if (event.matches) {
          console.log(event.matches, light);
          activateTheme(light);
        }
      });
  */
}
