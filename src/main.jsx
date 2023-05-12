import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Contatos from "./routes/Contatos.jsx";
import Historia from "./routes/Historia.jsx";
import Loja from "./routes/Loja.jsx";
import Servicos from "./routes/Servicos.jsx";
import Sobre from "./routes/Sobre.jsx";
import { ErrorPage } from "./routes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contatos",
        element: <Contatos />,
      },
      {
        path: "/historia",
        element: <Historia />,
      },
      {
        path: "/loja",
        element: <Loja />,
      },
      {
        path: "/servicos",
        element: <Servicos />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
