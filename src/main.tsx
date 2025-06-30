import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TranslationProvider } from "@/context/TranslationContext";

createRoot(document.getElementById("root")!).render(
  <TranslationProvider>
    {/* <Provider store={store}> */}
    <ToastContainer />
    <App />
    {/* </Provider> */}
  </TranslationProvider>
);
