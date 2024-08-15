import { Button, Card, Checkbox, Input, InputNumber } from "antd"
import './ProductCard.css'
import ReviewsScore from "../reviews/ReviewsScore"
import Like from "../like/Like"
import { Product } from "../../adapters/Product"
import getScore from "../../utilities/getScore"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

interface ProductCardProps{
  product: Product;
}

const ProductCard:  React.FC<ProductCardProps> = ({ product }) => {

  const {setModalProduct, setOpenModal} = useContext(DataContext);

  const handleButton = () => {
    setModalProduct(product);
    setOpenModal(true);
  };

  return (
    <>
        <Card style={{ width: '16rem', margin: 16, height: 480, borderRadius: '20px' }} className="productCard">
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <div className="frame" style={{ width: "95%", height:330}}>
                  <div className="circle">{product.discount}%</div>
                  <div className="like"><Like></Like></div>
                  <img className="img" src={(product.img)[0]} style={{ width: "100%", height:330}}></img>
                </div>
                
                
            </div>
            <div style={{padding: '0px 16px 10px 16px'}}>
              <div style={{display:'flex', justifyContent: 'space-between'}}>
                <div>
                  <div style={{fontWeight: 'bold', fontSize: '12px', marginTop: '10px', marginBottom: '4px'}}>{product.name}</div>
                  <div><ReviewsScore score={getScore(product.reviews)}/></div>
                </div>
                <div>
                  <div style={{fontSize: '22px', color: '#004AC1', fontWeight: 'bolder'}}>${product.price}</div>
                  <div style={{fontSize: '16px', marginTop: '-10px', color: '#7D879C', fontWeight: 'bolder', textAlign:'end', textDecorationLine: 'line-through'}}>$4,100</div>
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                <div style={{color: '#7D879C', fontSize: '10px'}}>$120 p/semana <br></br> o $520 p/mes</div>
                <Button className={'yellowButton'} onClick={handleButton}>Lo Quiero!</Button>
              </div>
            </div>
        </Card>
    </>
  )
}

export default ProductCard
