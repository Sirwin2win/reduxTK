import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Products from './pages/Products'
import New from './pages/New'
import { Provider } from 'react-redux'
import store from './app/store'
import ProductDetail from './components/productDetail'
import CartPage from './components/CartPage'


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/product' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/new' element={<New />} />
        <Route path='/cart' element={<CartPage />} />
        </Route>
      </Routes>
     
    </BrowserRouter>
    </Provider>
  )
}

export default App
