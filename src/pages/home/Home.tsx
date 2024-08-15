import { useContext, useState } from "react";
import ImgCarousel from "../../components/carousel/ImgCarousel";
import Filters from "../../components/filters/Filters";
import SearchBar from "../../components/searchBar/SearchBar";
import Sorter from "../../components/sorter/Sorter";
import { DataContext } from "../../context/DataContext";
import ProductCard from "../../components/productCard/ProductCard";
import { Product } from "../../adapters/Product";
import { FiltersContext } from "../../context/FiltersContext";
import { categories } from "../../adapters/Categories";
import { getRealValue } from "../../utilities/getRealValue";
import getScore from "../../utilities/getScore";

export default function Home(){

    const {data} = useContext(DataContext);

    const [searchText, setSearchText] = useState('');

    const [category, setCaterogy] = useState(0);

    const [mark, setMark] = useState('');

    const [price, setPrice] = useState({l: '', r: ''});

    const [stars, setStars] = useState(-1);

    function filterData(): Product[]{
      let tmp_data: Product[] = data; 
      tmp_data = tmp_data.filter(
        (p: Product) => ((p.name.toLowerCase().includes(searchText.toLowerCase())))
      )

      if(category != 0){
        tmp_data = tmp_data.filter(
          (p) => (p.category == categories[category - 1])
        )
      }

      if(mark != ''){
        tmp_data = tmp_data.filter(
          (p) => (p.manufacturer == mark)
        )
      }

      if((price.l != '' && price.r != '')){
        const l = parseInt(price.l);
        const r = parseInt(price.r);
        tmp_data = tmp_data.filter(
          (p) => (getRealValue(p) >= l && getRealValue(p) <= r)
        )
      }

      if(stars != -1){
        tmp_data = tmp_data.filter(
          (p) => {
            return (getScore(p.reviews) == stars);
          }
        )
      }

      return tmp_data;
    };

    return <FiltersContext.Provider value={{searchText, setSearchText, category, setCaterogy, mark, setMark, price, setPrice, stars, setStars}}>
      <div style={{display: 'flex', marginRight: '0px', marginLeft: '40px', marginTop: '30px', marginBottom: '30px'}}>
        <Sorter></Sorter>
        <SearchBar></SearchBar>
      </div>
      <div style={{display: 'flex', alignContent: 'center'}}>
        <div style={{marginLeft: '40px'}}>
          <Filters></Filters>
        </div>
        <div className='cardsContainer'>
          {filterData().map(
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
    </FiltersContext.Provider>
}