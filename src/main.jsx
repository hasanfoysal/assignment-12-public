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
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import MyProducts from './Components/Dashboard/MyProducts/MyProducts';
import ManageUsers from './Components/Dashboard/ManageUsers/ManageUsers';
import AllUsers from './Components/Dashboard/AllUsers/AllUsers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
        element:<Viewdetails></Viewdetails> ,
        loader: () => fetch('http://localhost:5000/services')
      },
      {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
          {
            path: 'profile',
            element: <MyProfile></MyProfile>
          },
          {
            path: 'product',
            element: <AddProduct></AddProduct>
          },
          {
            path: 'products',
            element: <MyProducts></MyProducts>
          },
          {
            path: 'manage',
            element: <ManageUsers></ManageUsers>
          },
          {
            path: 'users',
            element: <AllUsers></AllUsers>
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