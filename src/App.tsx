import { Card, Checkbox } from 'antd'
import './App.css'
import { DataContext } from './context/DataContext'
import React, { useEffect, useState } from 'react'
import { DataForContext } from './adapters/Product'
import { getProducts } from './services/getProducts'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ProductModal from './components/modal/ProductModal'



function App() {

  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<DataForContext>({
    data: [],
    product: null,
    openModal,
    setOpenModal
  });
  
  useEffect(
    () => {
      setData({data: getProducts(), product: null, openModal, setOpenModal});
    }, []
  )

  return (<>
    <ProductModal></ProductModal>
    <DataContext.Provider value={data}>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </DataContext.Provider>
    </>
  )
}

export default App
