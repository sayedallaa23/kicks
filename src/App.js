import "./App.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import SiteLayout from "./pages/SiteLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CatigoriesPage from "./pages/CategoriesPage";
import { Authprovider } from "./store/AuthContext";
import { CartContextProvider } from "./store/CartContext";
import CartPage from "./pages/CartPage";
import { WomenProductsPage } from "./pages/WomenProductsPage";
import { MenProductsPage } from "./pages/MenProductsPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";
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
      },
      {
        path:"/cart",
        element:<CartPage/>
      },
      {
        path: "/categories/men",
        element: <MenProductsPage />,

      },
      {
        path: "/categories/women",
        element: <WomenProductsPage />,
      },

      {
        path: "/under-construction",
        element: <UnderConstructionPage />,
      }
    ],
  },
]);

function App() {
  return (
    <CartContextProvider>
    <Authprovider>      
      <RouterProvider router={router} />
    </Authprovider>
    </CartContextProvider>
  );
}

export default App;
