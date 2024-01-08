import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MoviePage from "../Pages/MoviePage";

let router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movies/:id",
    element: <MoviePage />,
  },
]);

const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
