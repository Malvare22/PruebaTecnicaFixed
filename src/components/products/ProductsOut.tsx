import { useContext } from 'react';
import ProductCard from '../productCard/ProductCard';
import style from './ProductsOut.module.css'
import { DataContext } from '../../context/DataContext';
import { Product } from '../../adapters/Product';
import { sorters } from '../../utilities/sorterFunctions';

interface ProductOutProps{
    tittle: string,
    product?: any
}

const ProductOut: React.FC<ProductOutProps> = ({tittle}) => {

    const {data} = useContext(DataContext);

    function buffer(): Product[]{
        const x = data;
        x.sort(sorters[0]);
        return (x.slice(0, 4));
    }

    return <>
    <div>
        <div className={style.tittle}>{tittle}</div>
        <div className={style.cardsContainer}>
        {
            buffer().map(
                (p, i) => <ProductCard product={p} key={i}></ProductCard>
            )
        }
        </div>
    </div>
    </>
}

export default ProductOut;