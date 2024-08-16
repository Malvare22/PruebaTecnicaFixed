import { Card, Checkbox, Input, InputNumber } from "antd"
import styles from './Filters.module.css'
import ReviewsScore from "../reviews/ReviewsScore";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { Product } from "../../adapters/Product";
import { FiltersContext } from "../../context/FiltersContext";
import { categories } from "../../adapters/Categories";
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

    const {mark, setMark, buffer, category} = useContext(FiltersContext);

    const {data} = useContext(DataContext);

    console.log(mark)

    const filterMarks = (): Product[] => {
        if(category != 0){
            return data.filter(
              (p : Product) => (p.category == categories[category - 1])
            )
        }

        return data;
    };

    const handleCheckbox = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(mark == event.currentTarget.value){
            setMark(0);
            return;
        }
        setMark(event.currentTarget.value);
    };

    const marks = (): string[] => {
        let st = new Set<string>();
        filterMarks().forEach((element: Product) => {
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
        </div>
    </>;
}

const PriceRange = () => {

    const {price, setPrice} = useContext(FiltersContext);
    const handleInput = (value: string, x: string) => {
        setPrice({...price, [x]: value});
    };

    return <>
        <div className={styles.label}>Precio</div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <InputNumber 
                style={{ width: '120px' }} 
                value={price.l} 
                onChange={(value) => handleInput(value, 'l')} 
            />
            <a style={{ margin: '0px', fontSize: '20px' }}>-</a>
            <InputNumber 
                style={{ width: '120px' }} 
                value={price.r}
                onChange={(value) => handleInput(value, 'r')} 
        />
        </div>
        
    </>;
}

const ReviewsSelector = () => {

    const {stars, setStars} = useContext(FiltersContext);

    return <>
        <div className={styles.label}>Reviews</div>
        <ReviewsScore score={stars} setScore={setStars}></ReviewsScore>
        
    </>;
}

export default Filters
