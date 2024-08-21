import ReviewsScore from "../../components/reviews/ReviewsScore";
import BuyProtect from "../../assets/img/buy_protect.png"
import styles from "./ProductDetails.module.css"
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
import ProductOut from "../../components/products/ProductsOut";
import CreditCard01 from "../../assets/svg/productDetail/CreditCard01";
import CreditCard02 from "../../assets/svg/productDetail/CreditCard02";
import CreditCard03 from "../../assets/svg/productDetail/CreditCard03";
import CreditCard04 from "../../assets/svg/productDetail/CreditCard04";
import getScore from "../../utilities/getScore";
import { getRealValue } from "../../utilities/getRealValue";



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
            <Row style={{width : '100%', marginTop: '30px', marginBottom: '20px'}} align={'middle'}>
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
        <Row style={{marginTop: '30px', marginBottom: '50px'}}>
            <ProductOut tittle="Productos Relacionados"></ProductOut>
        </Row>
    </ProductDetailContext.Provider>
}


const GeneralInformation = () => {

    const product = useContext(ProductDetailContext);

    return<div style={{padding: 10}}>
        <Row justify={'space-between'}>
            <Col>
                <Row style={{width: 260, fontSize: 24, color: '#2B3445'}}>{product?.name}</Row>
                <Row style={{marginTop: '10px', marginBottom: '10px'}}><ReviewsScore score={getScore(product?.reviews)}></ReviewsScore></Row>
            </Col>
            <Col>
                <div style={ {fontSize: '30px', color: '#004AC1', fontWeight: 'bolder', display: 'flex', justifyContent: 'end'}}>${getRealValue(product)}</div>
                <div style={{width: '100%', fontSize: '16px', marginTop: '-4px', color: '#7D879C', textAlign:'end', textDecorationLine: 'line-through'}}>{product?.price}</div>
                <div className={styles.cardsContainer}>
                    <CreditCard01></CreditCard01>
                    <CreditCard02></CreditCard02>
                    <CreditCard03></CreditCard03>
                    <CreditCard04></CreditCard04>
                </div>
            </Col>
        </Row>
        <Row className={styles.description}>
            <Row>{product?.description}</Row>
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