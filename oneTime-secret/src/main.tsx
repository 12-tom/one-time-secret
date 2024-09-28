import ReactDOM from "react-dom/client";
import appRouter from "./App.tsx";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient({});

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={appRouter} />
  </QueryClientProvider>
);
