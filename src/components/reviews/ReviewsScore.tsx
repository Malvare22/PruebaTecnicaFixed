import { useState } from 'react';
import Star from '../../assets/svg/Star';
import StarFill from '../../assets/svg/StarFill';
import styles from './ReviewsScore.module.css'

interface ReviewsScoreProps{
    score: number,
    setScore?: React.Dispatch<React.SetStateAction<number>>
}

/**
 * Es el indicador de la calificación, se le envía el valor, si se indica un seter permite manipularlo
 */
const ReviewsScore: React.FC<ReviewsScoreProps> = ({score, setScore}) => {

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
        <div style={{marginRight: 3}} onClick={handleClick}>{score >= id ? <StarFill></StarFill> : <Star></Star>}</div>
    </>;
};

export default ReviewsScore