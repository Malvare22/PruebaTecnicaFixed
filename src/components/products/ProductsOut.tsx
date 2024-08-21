import { useContext } from 'react';
import ProductCard from '../productCard/ProductCard';
import style from './ProductsOut.module.css'
import { DataContext } from '../../context/DataContext';
import { Product } from '../../adapters/Product';
import { sorters } from '../../utilities/sorterFunctions';
import { Col, Row } from 'antd';

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
    <Row justify={'center'} align={'middle'}>
        <Row justify={'center'} align={'middle'} className={style.tittle}>{tittle}</Row>
        <Row justify={'center'} align={'middle'}>
        {
            buffer().map(
                (p, i) => <Col span={5} style={{padding: '10px'}}><ProductCard product={p} key={i}></ProductCard></Col>
            )
        }
        </Row>
    </Row>
    </>
}

export default ProductOut;