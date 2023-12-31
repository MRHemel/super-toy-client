import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Login/Register.jsx';
import AddToy from './components/AddToy/AddToy.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import MyToy from './components/MyToy/MyToy.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://super-toy-server-delta.vercel.app/toys')
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
        path: '/addtoy',
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/mytoy',
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
        loader: () => fetch('https://super-toy-server-delta.vercel.app/addingtoy')
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
