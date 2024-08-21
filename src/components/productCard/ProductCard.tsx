import { Button, Card, Checkbox, Col, Input, InputNumber, Row } from "antd"
import './ProductCard.css'
import ReviewsScore from "../reviews/ReviewsScore"
import Like, { LikeFrame } from "../like/Like"
import { Product } from "../../adapters/Product"
import getScore from "../../utilities/getScore"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import { getRealValue } from "../../utilities/getRealValue"
import { Link } from "react-router-dom"

interface ProductCardProps{
  product: Product;
}

export const priceStyle : React.CSSProperties = {fontSize: '28px', color: '#004AC1', fontWeight: 'bolder'};

export const oldPriceStyle : React.CSSProperties = {fontSize: '16px', marginTop: '-10px', color: '#7D879C', fontWeight: 'bolder', textAlign:'end', textDecorationLine: 'line-through'};

const ProductCard:  React.FC<ProductCardProps> = ({ product }) => {

  const {setModalProduct, setOpenModal} = useContext(DataContext);

  const handleButton = () => {
    setModalProduct(product);
    setOpenModal(true);
  };

  return (
    <>
        <Card style={{ width: '100%', height: 480, borderRadius: '20px' }} className="productCard">
            <Row style={{display: 'flex', justifyContent: 'center', padding: 10}}>
              <LikeFrame product={product} height="300px"></LikeFrame>           
            </Row>
            <Row style={{padding: '0px 16px 10px 16px', height: '170px'}} align={'stretch'}>
              <Col span={12} style={{height: '100%'}}>
                <Row style={{height: '90%', display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                  <Row>
                    <Link to={'/product?id=' + product.id} style={{fontWeight: 'bold', fontSize: '12px', marginTop: '10px', marginBottom: '4px'}}>{product.name}</Link>
                    <ReviewsScore score={getScore(product.reviews)}/></Row>
                    <Row>
                      <div style={{color: '#7D879C', fontSize: '10px'}}>$120 p/semana <br></br> o $520 p/mes</div>
                    </Row>
                  </Row>
              </Col>
              <Col span={12}>
                <Row style={{height: '90%', display:'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Row justify={'end'} style={{marginTop: '2px'}}>
                      <div style={priceStyle}>${getRealValue(product)}</div>
                      <div style={oldPriceStyle}>${product.price}</div>
                    </Row>
             
                    <Row justify={'end'}><Button className={'yellowButton'} onClick={handleButton}>Lo Quiero!</Button></Row>
                  
                </Row>
              </Col>
            </Row>
        </Card>
    </>
  )
}

export default ProductCard
