import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
]);

export default Router;
