import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/Abous.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'

const router = new createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children:[
      { path: '', element:<Home/> },
      { path: 'about', element:<About/> },
      { path: 'contact', element:<Contact/> },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
