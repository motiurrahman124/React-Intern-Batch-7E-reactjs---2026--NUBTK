import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from './layouts/MainLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import Products from './pages/admin/Products.jsx'
import Users from './pages/admin/Users.jsx'
import ProductDetails from './pages/admin/ProductsDetails.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path="products/" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="users" element={<Users />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
