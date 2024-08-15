import { useContext } from "react";
import ImgCarousel from "../../components/carousel/ImgCarousel";
import Filters from "../../components/filters/Filters";
import SearchBar from "../../components/searchBar/SearchBar";
import Sorter from "../../components/sorter/Sorter";
import { DataContext } from "../../context/DataContext";
import ProductCard from "../../components/productCard/ProductCard";

export default function Home(){

    const {data} = useContext(DataContext);

    return <>
      <div style={{display: 'flex', marginRight: '0px', marginLeft: '40px', marginTop: '30px', marginBottom: '30px'}}>
        <Sorter></Sorter>
        <SearchBar></SearchBar>
      </div>
      <div style={{display: 'flex', alignContent: 'center'}}>
        <div style={{marginLeft: '40px'}}>
          <Filters></Filters>
        </div>
        <div className='cardsContainer'>
          {data.map(
            (product, key) => <ProductCard product={product} key={key}/>
          )}
          {/* <ProductCard></ProductCard> */}
          
        </div>
      </div>
      <div className='space'>
        <div style={{color: '#2B3445', fontWeight: 'bold', textAlign: 'center'}}>Ofertas y Promociones</div>
        <div>
          <ImgCarousel></ImgCarousel>
        </div>
      </div>
      <div className='space'>
        {/* <ProductOut tittle='Nuestros Productos Más Vendidos'></ProductOut> */}
      </div>
      {/* <ProductModal></ProductModal> */}
    </>
}