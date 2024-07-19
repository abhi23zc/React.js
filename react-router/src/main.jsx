import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/Abous.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import User, { githubInLoader } from './components/User.jsx'

// const router = new createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       { path: '', element:<Home/> },
//       { path: 'about', element:<About/> },
//       { path: 'contact', element:<Contact/> },
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route loader={githubInLoader} path='/user/:userid' element={<User />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
