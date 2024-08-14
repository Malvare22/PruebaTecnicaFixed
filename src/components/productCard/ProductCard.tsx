import { Button, Card, Checkbox, Input, InputNumber } from "antd"
import './ProductCard.css'
import ReviewsScore from "../reviews/ReviewsScore"
import Like from "../like/Like"
function ProductCard() {

  return (
    <>
        <Card style={{ width: '16rem', margin: 16, height: 480, borderRadius: '20px' }} className="productCard">
            <div style={{display: 'flex', justifyContent: 'center', padding: 10}}>
                <div className="frame" style={{backgroundColor:'black', width: "95%", height:330}}>
                  <div className="circle">40%</div>
                  <div className="like"><Like></Like></div>
                </div>
                
            </div>
            <div style={{padding: '0px 16px 10px 16px'}}>
              <div style={{display:'flex', justifyContent: 'space-between'}}>
                <div>
                  <div style={{fontWeight: 'bold', fontSize: '12px', marginTop: '10px', marginBottom: '4px'}}>Samsung Galaxy A12</div>
                  <div><ReviewsScore/></div>
                </div>
                <div>
                  <div style={{fontSize: '28px', color: '#004AC1', fontWeight: 'bolder'}}>$3,499</div>
                  <div style={{fontSize: '18px', marginTop: '-10px', color: '#7D879C', fontWeight: 'bolder', textAlign:'end', textDecorationLine: 'line-through'}}>$4,100</div>
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                <div style={{color: '#7D879C', fontSize: '10px'}}>$120 p/semana <br></br> o $520 p/mes</div>
                <Button className={'yellowButton'}>Lo Quiero!</Button>
              </div>
            </div>
        </Card>
    </>
  )
}

export default ProductCard
