import ReviewsScore from "../../components/reviews/ReviewsScore";
import BuyProtect from "../../assets/img/buy_protect.png"
import styles from "./ProductDetails.module.css"
import { oldPriceStyle, priceStyle } from "../../components/productCard/ProductCard";
import { Col, Image, Row, Space, Tabs, TabsProps } from "antd";
import { CreditSection, Taxes } from "../../components/taxes/Taxes";
import { useContext, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Product } from "../../adapters/Product";
import { getProductById } from "../../services/getProducts";
import { ProductDetailContext } from "../../context/ProductDetailContext";
import PreviewImg from "./components/PreviewImg/PreviewImg";
import ImgsProduct from "./components/ImgsProduct/ImgsProduct";
import Panel from "./components/Panel/Panel";
import ProductBreadcrumb from "./components/Breadcrumb/ProductBreadcrumb";
import CreditBanner from "./components/CreditBanner/CreditBanner";

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
        <Row className="container" justify={'center'}>
            <Row style={{width : '100%', marginTop: '30px'}} align={'middle'}>
                <>
                    <Col span={3}><Row justify={'center'} align={'middle'} ><Link to={'/'} style={{color:'#707070', border: '#707070 1px solid', padding: '3%', marginLeft: '-20px'}}>Volver a resultados</Link></Row></Col>
                    <Col span={10}>
                        <Row align={'middle'}>
                            <div><ProductBreadcrumb product={product}></ProductBreadcrumb></div>
                        </Row>
                    </Col>
                </>
            </Row>
            <Row>
                <Row>
                    <Col span={10}><PreviewImg></PreviewImg></Col>
                    <Col span={14}><GeneralInformation></GeneralInformation></Col>
                </Row>
                <Row style={{color: '#2B3445', fontSize: '16px', fontWeight: 'bold', marginTop: '10px', marginBottom: '10px'}}>Información Detallada del Producto</Row>
                <Row>
                    <Row>
                        <Col span={11}><ImgsProduct i={0} j={1}></ImgsProduct></Col>
                        <Col offset={1} span={12} style={{width: '100%'}}><Panel></Panel></Col>
                    </Row>
                    <Row style={{width: '100%', marginTop: '20px'}}>
                        <Col span={11}><ImgsProduct i={2} j={3}></ImgsProduct></Col>
                        <Col span={13} style={{width: '100%'}}><CreditSection></CreditSection></Col>
                    </Row>

                </Row>
            </Row>
        </Row>
    </ProductDetailContext.Provider>
}


const GeneralInformation = () => {
    return<div style={{padding: 10}}>
        <Row justify={'space-between'}>
            <Col>
                <Col style={{width: 260, fontSize: 24, color: '#2B3445'}}>Samsung A10S 13+2MP 64GB, 4GB RAM</Col>
                <Col style={{marginTop: '10px', marginBottom: '10px'}}><ReviewsScore score={5}></ReviewsScore></Col>
            </Col>
            <Col>
                <Col style={ {fontSize: '30px', color: '#004AC1', fontWeight: 'bolder'}}>$3,499</Col>
                <Col style={{fontSize: '16px', marginTop: '-4px', color: '#7D879C', textAlign:'end', textDecorationLine: 'line-through'}}>$4,100</Col>
            </Col>
        </Row>
        <Row className={styles.description}>
            <Row>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco....</Row>
            <Row style={{color: '#004AC1', fontStyle: 'italic', marginTop: '6px'}}>- Ver más -</Row>
        </Row>
        <Row justify={'end'}>
            <div style={{marginBottom: '10px'}}><img src={BuyProtect} width={300}></img></div>
        </Row>
        <Row justify={'end'}>
            <div style={{fontSize: 10, color: '#E6406D'}}>La promoción vence en 24d 12h:43m</div>

        </Row>
        <Row>
            <CreditBanner></CreditBanner>
        </Row>

    </div>;
}