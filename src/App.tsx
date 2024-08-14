import { Card, Checkbox } from 'antd'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ProductModal from './components/modal/ProductModal'
import SearchBar from './components/searchBar/SearchBar'
import Sorter from './components/sorter/Sorter'
import Filters from './components/filters/Filters'
import ProductCard from './components/productCard/ProductCard'
import ImgCarousel from './components/carousel/ImgCarousel'
import ProductOut from './components/products/ProductsOut'



function App() {

  return (
    <>
      <Header></Header>
      <div style={{display: 'flex', marginRight: '0px', marginLeft: '40px', marginTop: '30px', marginBottom: '30px'}}>
        <Sorter></Sorter>
        <SearchBar></SearchBar>
      </div>
      <div style={{display: 'flex', alignContent: 'center'}}>
        <div style={{marginLeft: '40px'}}>
          <Filters></Filters>
        </div>
        <div className='cardsContainer'>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
      <div className='space'>
        <div style={{color: '#2B3445', fontWeight: 'bold', textAlign: 'center'}}>Ofertas y Promociones</div>
        <div>
          <ImgCarousel></ImgCarousel>
        </div>
      </div>
      <div className='space'>
        <ProductOut tittle='Nuestros Productos Más Vendidos'></ProductOut>
      </div>
      {/* <ProductModal></ProductModal> */}
      <div style={{height: 10, margin: 100}}></div>
      <Footer></Footer>
    </>
  )
}

export default App
