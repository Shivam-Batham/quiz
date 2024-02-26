import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Home from './components/Page1/Home.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Home />}>
      {/* <Route path='contest' element={<Layout />} >
        <Route path=''
      </Route> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider router={router} />
  </React.StrictMode>,
)
