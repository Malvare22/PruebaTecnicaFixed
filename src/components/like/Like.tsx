import { useState } from "react";
import { Heart } from "../../assets/svg/Heart";
import { HeartFill } from "../../assets/svg/HeartFill";
import styles from './Like.module.css'

interface LikeProps{
    liked: boolean,
    setLike: React.Dispatch<React.SetStateAction<boolean>>
}

export const Like: React.FC = () =>{

    const [liked, setLiked] = useState(false);

    return<div className={(liked ? styles.likes : styles.unlikes) + ' ' + styles.container} onClick={() => setLiked(!liked)}>
        {liked ? <HeartFill/> : <Heart/>}
    </div>
}

export default Like;