import "./normalize.css";
import "swiper/css";
import "swiper/css/pagination";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Start from "./pages/Start";
import Book from "./pages/Book";
import Quiz from "./pages/Quiz";
import Suprise from "./pages/Surprise";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/book",
    element: <Book />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/surprise",
    element: <Suprise />,
  },
]);

function Routes() {
  return <RouterProvider router={routes} />;
}

export default Routes;
