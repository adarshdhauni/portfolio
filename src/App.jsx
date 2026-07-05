import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
    });
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
