import Navbar from "./components/Navbar";
import "./App.css";
import Slogan from "./components/Slogan";
import ProductOfYear from "./components/ProductOfYear";
import NewDrops from "./components/NewDrops";
import Catigories from "./components/Catigories";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SiteLayout from "./pages/SiteLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CatigoriesPage from "./pages/CategoriesPage";
const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/pdt/:id",
        element: <ProductPage />,
        errorElement: <div>Not found</div>,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/categories",
        element: <CatigoriesPage />,
      }

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
