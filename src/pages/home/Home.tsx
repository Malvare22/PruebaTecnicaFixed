import { useContext, useEffect, useState } from "react";
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
import { sorters } from "../../utilities/sorterFunctions";
import ProductOut from "../../components/products/ProductsOut";
import { useSearchParams } from "react-router-dom";
import { Col, Row } from "antd";

export default function Home(){

    const {data} = useContext(DataContext);

    const [searchParams] = useSearchParams();

    const url_category = searchParams.get('category');

    const [searchText, setSearchText] = useState('');

    const [category, setCaterogy] = useState(0);

    const [mark, setMark] = useState('');

    const [price, setPrice] = useState({l: '', r: ''});

    const [stars, setStars] = useState(-1);

    const [sorter, setSorter] = useState(0);

    useEffect(
      () => {
        if(url_category){
          const x =(url_category == 'phone') ? 1 : 2;
          setCaterogy(x);
        }
        else{
          setCaterogy(0);
        }
        if(searchParams.get('manufacturer')){
          const x =(searchParams.get('manufacturer'));
          setMark(x);
        }
      }, [url_category]
    )

    function filterData(): Product[]{
      let tmp_data: Product[] = data; 

      tmp_data.sort(sorters[sorter]);

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
          (p) => (l <= r && getRealValue(p) >= l && getRealValue(p) <= r)
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

    return <FiltersContext.Provider value={{searchText, setSearchText, category, setCaterogy, mark, setMark, price, setPrice, stars, setStars, sorter, setSorter, buffer: filterData()}}>
      <Row justify={'start'} style={{marginTop: '20px', marginBottom: '10px'}}>
        <Col offset={1} span={6}><Sorter></Sorter></Col>
        <Col span={16} offset={1}><SearchBar></SearchBar></Col>
      </Row>
      <Row justify={'start'} style={{marginTop: '20px', marginBottom: '40px'}}>
          <Col offset={1} span={6}><Filters></Filters></Col>
          <Col span={16} offset={1} style={{height: '600px', overflowY: 'auto'}}>
            <Row>
              {filterData().map(
                (product, key) => <Col span={7} style={{margin: '10px', marginTop: 0, marginLeft: key%3 != 0? '10px': '0px'}}><ProductCard product={product} key={key}/></Col>
              )}      
            </Row>

          </Col>
      </Row>
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
    </FiltersContext.Provider>
}