import { useEffect, useState } from "react";
import { Heart } from "../../assets/svg/Heart";
import { HeartFill } from "../../assets/svg/HeartFill";
import styles from './Like.module.css'
import { Product } from "../../adapters/Product";
import { json } from "react-router-dom";

interface LikeFrameProps{
    product: Product,
    height: string
}

export const LikeFrame: React.FC<LikeFrameProps> = ({product, height}) => {

    const [liked, setLiked] = useState(false);

    useEffect(
        () => {
            readLike();
        }, []
    )

    const readLike =  () => {
        let x : any = localStorage.getItem('like')
        // let v = {[product.id]: false};
        if(x != null){
            x = JSON.parse(x);
            setLiked(x[product.id]);
        }
        else{
            x = {[product.id]: false};
            localStorage.setItem('like', JSON.stringify(x));
        }


    };

    const writeLike = () => {
        let x : any = localStorage.getItem('like')
        // let v = {[product.id]: false};
        if(x != null){
            x = JSON.parse(x);
            x[product.id] = !liked;
            setLiked(!liked);
            localStorage.setItem('like', JSON.stringify(x));
        }
    };


    return <>
        <div className={styles.frame} style={{height:height}}>
            <div className={styles.circle}>{product.discount}%</div>
            <div className={styles.like}>
                <div className={(liked ? styles.likes : styles.unlikes) + ' ' + styles.container} onClick={() => writeLike()}>{liked ? <HeartFill/> : <Heart/>}</div>
            </div>
            <img className={styles.img} src={(product.img)[0]} style={{ width: "100%", height:'100%'}}></img>
        </div>
    </>;
}

export default LikeFrame;