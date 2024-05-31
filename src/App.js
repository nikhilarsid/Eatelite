// src/app.js
import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ResMenu from "./components/Restrauntmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { CartProvider } from "./components/CartContext"; // Import CartProvider

const Applayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children : [
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/",
        element : <Body/>
      },
      {
        path : "/contactus",
        element : <Contact/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/restraunt/:resId",
        element : < ResMenu/>
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
    <RouterProvider router={approuter}/>
  </CartProvider>
);

