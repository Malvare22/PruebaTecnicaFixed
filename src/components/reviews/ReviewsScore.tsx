import { useState } from 'react';
import Star from '../../assets/svg/Star';
import StarFill from '../../assets/svg/StarFill';
import styles from './ReviewsScore.module.css'

/**
 * Es el indicador de la calificación, sel e envía el valor, si se indica un seter permite manipularlo
 */
const ReviewsScore = () => {

    const [score, setScore] = useState(1);

    const elementos = [];
    
    for (let i = 1; i <= 5; i++) {
        elementos.push(<Point id={i} score={score} setScore={setScore}></Point>);
    }

    return <>        
        <div style={{display:'flex'}} className={styles.svg}>{elementos}</div>
    </>;
}

interface PointProps{
    id : number,
    score : number,
    setScore?: React.Dispatch<React.SetStateAction<number>>;
}

const Point : React.FC<PointProps> = ({id, score, setScore}) => {

    const handleClick = () => {
        if(setScore) setScore(id);
    }

    return<>
        <div onClick={handleClick}>{score >= id ? <StarFill></StarFill> : <Star></Star>}</div>
    </>;
};

export default ReviewsScore