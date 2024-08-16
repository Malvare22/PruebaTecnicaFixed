import ReviewsScore from "../../components/reviews/ReviewsScore";
import BuyProtect from "../../assets/img/buy_protect.png"
import styles from "./ProductDetails.module.css"
import { oldPriceStyle, priceStyle } from "../../components/productCard/ProductCard";
import { Col, Image, Row, Tabs, TabsProps } from "antd";
import { CreditSection, Taxes } from "../../components/taxes/Taxes";
import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Product } from "../../adapters/Product";
import { getProductById } from "../../services/getProducts";
import { ProductDetailContext } from "../../context/ProductDetailContext";
import PreviewImg from "./components/PreviewImg/PreviewImg";
import ImgsProduct from "./components/ImgsProduct/ImgsProduct";
import Panel from "./components/Panel/Panel";

export default function ProductDetails(){

    const [searchParams] = useSearchParams();

    const id = searchParams.get('id');

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(
        () => {
            if(id){
                setProduct(getProductById(parseInt(id)));
            }
            
        }, [id]
    )

    if(!product) return<></>;

    return <ProductDetailContext.Provider value={product}>
        <div className="container">
            <Row>
                {/* <Row className="sorterStyles">
                    <Col><div className="label">Volver a resultados</div></Col>
                    <Col><div>asdasdasd</div></Col>
                </Row> */}
                <Row>
                    <Col span={10}><PreviewImg></PreviewImg></Col>
                    <Col span={14}><GeneralInformation></GeneralInformation></Col>
                </Row>
                <Row style={{color: '#2B3445', fontSize: '16px', fontWeight: 'bold', marginTop: '10px', marginBottom: '10px'}}>Información Detallada del Producto</Row>
                <Row justify={'center'}>
                    <Col span={10}><ImgsProduct></ImgsProduct></Col>
                    <Col span={14}>
                        <Row><Panel></Panel></Row>
                        {/* <Row><CreditSection></CreditSection></Row> */}
                    </Col>
                </Row>
            </Row>
        </div>
    </ProductDetailContext.Provider>
}


const GeneralInformation = () => {
    return<div style={{padding: 10}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <div style={{width: 260, fontSize: 24, color: '#2B3445'}}>Samsung A10S 13+2MP 64GB, 4GB RAM</div>
                <div style={{marginTop: '10px', marginBottom: '10px'}}><ReviewsScore score={5}></ReviewsScore></div>
            </div>
            <div>
                <div style={ {fontSize: '30px', color: '#004AC1', fontWeight: 'bolder'}}>$3,499</div>
                <div style={{fontSize: '16px', marginTop: '-4px', color: '#7D879C', textAlign:'end', textDecorationLine: 'line-through'}}>$4,100</div>
            </div>
        </div>
        <div className={styles.description}>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco....</div>
            <div style={{color: '#004AC1', fontStyle: 'italic', marginTop: '6px'}}>- Ver más -</div>
        </div>
        <div className={styles.toRight}>
            <div style={{marginBottom: '10px'}}><img src={BuyProtect} width={300}></img></div>
            <div style={{fontSize: 10, color: '#E6406D'}}>La promoción vence en 24d 12h:43m</div>
        </div>
        <div>
            <img></img>
        </div>

    </div>;
}