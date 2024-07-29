import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Root/Home/Home';
import Products from './Components/Products/Products';
import Login from './Components/Login/Login';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoutes from './Routes/PrivateRoutes';
import Viewdetails from './Components/ViewDetails/ViewDetails';
import Dashboard from './Components/Dashboard/Dashboard';
// import MyProfile from './Components/Dashboard/MyProfile/MyProfile';
// import Cart from './Components/Dashboard/Cart/Cart';
import MyProfile from './Components/Dashboard/MyProfile/MyProfile';
// import AddProduct from './Components/Dashboard/AddProduct/AddProduct';

import MyProducts from './Components/Dashboard/MyProducts/MyProducts';
import ManageUsers from './Components/Dashboard/ManageUsers/ManageUsers';
import AllUsers from './Components/Dashboard/AllUsers/AllUsers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminRoutes from './Routes/AdminRoutes';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import UpdateProduct from './Components/Dashboard/UpdateProduct/UpdateProduct';
import Payment from './Components/Dashboard/Payment/Payment';
// import updateItem from './Components/Dashboard/updateItem/updateItem';
// eslint-disable-next-line no-unused-vars
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
      },
      {
        path:'/product',
        element:<PrivateRoutes><Products></Products></PrivateRoutes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/viewdetails',
        element:<PrivateRoutes><Viewdetails></Viewdetails> </PrivateRoutes>,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes> ,
        children: [
          {
            path: 'profile',
            element:<AdminRoutes> <MyProfile></MyProfile></AdminRoutes>
          },
          // {
          //   path: 'product',
          //   element:<AdminRoutes><AddProduct></AddProduct></AdminRoutes> 
          // },
          {
            path: 'product',
            element: <AdminRoutes><AddProduct></AddProduct></AdminRoutes>
          },
          {
            path: 'products',
            element: <AdminRoutes><MyProducts></MyProducts></AdminRoutes>
          },
          {
            path: 'manage',
            element:<AdminRoutes><ManageUsers></ManageUsers></AdminRoutes> 
          },
          {
            path: 'updateItem/:id',
            element: <AdminRoutes><UpdateProduct></UpdateProduct></AdminRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/addProduct/${params.id}`)
          },
          {
            path: 'users',
            element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
          },
          {
            path: 'payment',
            element:<Payment></Payment>
          }
        ]

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <QueryClientProvider client={queryClient}>
   <div className="lg:max-w-6xl max-w-xl md:max-w-3xl mx-auto ">
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>
)
