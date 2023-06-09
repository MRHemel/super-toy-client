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



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/toys')
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
        element: <AddToy></AddToy>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>
      },
      {
        path: '/mytoy',
        element: <MyToy></MyToy>,
        loader: () => fetch('http://localhost:5000/addingtoy')
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
