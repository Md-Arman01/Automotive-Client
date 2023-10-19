import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Register from "../Pages/Register/Register";
import BrandDetails from "../Pages/Home/BrandDetails/BrandDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CardDetails from "../CardDetails/CardDetails";
import CardUpdate from "../CardUpdate/CardUpdate";

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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/cardDetails/:_id',
        element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>
      },
      {
        path: '/cardUpdate/:_id',
        element: <PrivateRoute><CardUpdate></CardUpdate></PrivateRoute>
      },
      {
        path: '/brandDetails/:id',
        loader: ({params}) => fetch(`https://assignment-10-server-eight-sigma.vercel.app/brands/${params.id}`),
        element: <BrandDetails></BrandDetails>
      }
    ]
  },
]);

export default Router;
