import ProductCard from '../productCard/ProductCard';
import style from './ProductsOut.module.css'

interface ProductOutProps{
    tittle: string,
    product?: any
}

const ProductOut: React.FC<ProductOutProps> = ({tittle, product}) => {
    return <>
    <div>
        <div className={style.tittle}>{tittle}</div>
        <div className={style.cardsContainer}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        </div>
    </div>
    </>
}

export default ProductOut;