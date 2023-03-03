import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/news", element: <Home /> },
      { path: "/destination", element: <Home /> },
      { path: "/blog", element: <Home /> },
      { path: "/contact", element: <Home /> },
    ],
  },
]);
