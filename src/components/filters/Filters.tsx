import { Card, Checkbox, Input, InputNumber } from "antd"
import styles from './Filters.module.css'
import ReviewsScore from "../reviews/ReviewsScore";
function Filters() {

  return (
    <>
        <Card style={{ width: 343 }}>
            <Marks></Marks>
            <PriceRange></PriceRange>
            <ReviewsSelector></ReviewsSelector>
        </Card>
    </>
  )
}

const Marks = () => {
    return <>
        <div className={styles.label}>Marcas</div>
        <div className={styles.option}>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
        </div>
    </>;
}

const PriceRange = () => {
    return <>
        <div className={styles.label}>Precio</div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}><InputNumber style={{width: '120px'}}></InputNumber><a style={{margin: '0px', fontSize:'20px'}}>-</a><InputNumber style={{width: '120px'}}></InputNumber></div>
        
    </>;
}

const ReviewsSelector = () => {
    return <>
        <div className={styles.label}>Reviews</div>
        <ReviewsScore></ReviewsScore>
        
    </>;
}

export default Filters
