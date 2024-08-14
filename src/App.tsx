import { Card, Checkbox } from 'antd'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ProductModal from './components/modal/ProductModal'
import SearchBar from './components/searchBar/SearchBar'
import Sorter from './components/sorter/Sorter'
import Filters from './components/filters/Filters'
import ProductCard from './components/productCard/ProductCard'

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
        </div>
      </div>
      {/* <ProductModal></ProductModal> */}
      <div style={{height: 10, margin: 100}}></div>
      <Footer></Footer>
    </>
  )
}

export default App
