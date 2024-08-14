import { Card, Checkbox } from 'antd'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import ProductModal from './components/modal/ProductModal'
import SearchBar from './components/searchBar/SearchBar'
import Sorter from './components/sorter/Sorter'
import Filters from './components/filters/Filters'

function App() {

  return (
    <>
      <Header></Header>
      <div style={{display: 'flex', alignContent: 'center', marginLeft: '80px', marginTop: '30px', marginBottom: '30px'}}>
        <Sorter></Sorter>
        <SearchBar></SearchBar>
      </div>
      <div style={{display: 'flex', alignContent: 'center'}}>
        <div style={{marginLeft: '80px'}}><Filters></Filters></div>
      </div>
      {/* <ProductModal></ProductModal> */}
      <Footer></Footer>
    </>
  )
}

export default App
