import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
    });

    Aos.refresh();
  }, []);

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
