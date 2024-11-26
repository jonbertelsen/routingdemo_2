import React from 'react'
import './App.css'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Products from './pages/Products'
import Home from './pages/Home'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
