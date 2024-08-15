import { Card, Checkbox, Input, InputNumber } from "antd"
import styles from './Filters.module.css'
import ReviewsScore from "../reviews/ReviewsScore";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { Product } from "../../adapters/Product";
import { FiltersContext } from "../../context/FiltersContext";
function Filters() {

  return (
    <>
        <Card style={{ width: 240 }}>
            <Marks></Marks>
            <PriceRange></PriceRange>
            <ReviewsSelector></ReviewsSelector>
        </Card>
    </>
  )
}

const Marks = () => {

    const {data} = useContext(DataContext);
    const {mark, setMark} = useContext(FiltersContext);

    console.log(mark)

    const handleCheckbox = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMark(event.currentTarget.value);
    };

    const marks = (): string[] => {
        let st = new Set<string>();
        data.forEach((element: Product) => {
            st.add(element.manufacturer);
        });


        return Array.from(st);
    }

    return <>
        <div className={styles.label}>Marcas</div>
        <div className={styles.option}>
            {
                marks().map(
                    (element: string) => <div><Checkbox checked={mark == element} onClick={handleCheckbox} value={element}>{element}</Checkbox></div>
                )
            }
            {/* <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div>
            <div><Checkbox>Hola</Checkbox></div> */}
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
