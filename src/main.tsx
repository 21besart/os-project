import React from "react";
import ReactDOM from "react-dom";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

import { ThemeContextProvider } from "@context/ThemeContext/ThemeContextProvider";
import { AuthContextProvider } from "@context/AuthContext/AuthContextProvider";
import { WindowContextProvider } from "@context/WindowContext/WindowContextProvider";

import "./styles/index.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <WindowContextProvider>
            <App />
          </WindowContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
