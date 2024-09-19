import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Empty from './Components/Empty/Empty'


function App() {

  let routing = createHashRouter([
    {path:'',element:<Layout></Layout>,children:[
      {path:'about',element:<About/>},
      {index:true,element:<Empty/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
    ]}
  ])

  return (
    <>
    <RouterProvider router={routing}></RouterProvider>
    </>
  )
}

export default App
