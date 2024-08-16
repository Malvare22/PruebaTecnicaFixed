import { Card, Checkbox } from 'antd'
import './App.css'
import { DataContext } from './context/DataContext'
import React, { useEffect, useState } from 'react'
import { DataForContext, Product } from './adapters/Product'
import { getProducts } from './services/getProducts'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ProductModal from './components/modal/ProductModal'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductDetails from './pages/product/ProductDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "product",
    element: <ProductDetails></ProductDetails>,
  },
]);

function App() {

  const [openModal, setOpenModal] = useState(true);
  const [modalProduct, setModalProduct] = useState<Product | null >(null);
  const [data, setData] = useState<Product[]>([]);
  
  useEffect(
    () => {
      setData(getProducts());
    }, []
  )

  return (<>
    <DataContext.Provider value={{data, modalProduct, setModalProduct, openModal, setOpenModal}}>
      <ProductModal></ProductModal>
      <Header></Header>
      <RouterProvider router={router} />
      {/* <Footer></Footer> */}
    </DataContext.Provider>
    </>
  )
}

export default App
