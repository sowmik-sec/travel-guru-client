import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/news", element: <Home /> },
      { path: "/destination", element: <Home /> },
      { path: "/blog", element: <Home /> },
      { path: "/contact", element: <Home /> },
    ],
  },
]);
