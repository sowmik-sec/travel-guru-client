import { createBrowserRouter } from "react-router-dom";
import Book from "../components/Book/Book";
import Home from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import PlaceDetails from "../components/PlaceDetails/PlaceDetails";
import Places from "../components/Places/Places";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Places /> },
      { path: "/news", element: <Home /> },
      { path: "/destination", element: <Home /> },
      { path: "/blog", element: <Home /> },
      { path: "/contact", element: <Home /> },
      {
        path: "/placeDetails/:id",
        element: <PlaceDetails />,
        loader: ({ params }) =>
          fetch(`https://travel-guru-server.onrender.com/hotels/${params.id}`),
      },
      {
        path: "/book",
        element: (
          <PrivateRoute>
            <Book />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "signup", element: <SignUp /> },
  { path: "signin", element: <Login /> },
]);
