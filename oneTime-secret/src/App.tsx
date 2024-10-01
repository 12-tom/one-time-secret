import {HomePage} from "./pages/HomePage";
import {SecretPage} from "./pages/SecretPage";
import Layout from "./components/layout";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout children />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "secret/:id", element: <SecretPage /> },
    ],
  },
]);

export default appRouter;
