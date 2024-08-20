import { Col, Row, Tabs, TabsProps } from "antd";
import styles from "../../ProductDetails.module.css"
import { useContext } from "react";
import { ProductDetailContext } from "../../../../context/ProductDetailContext";
import Review from "../Reviews/Reviews";

const Panel = () => {

    const product = useContext(ProductDetailContext);

    if(!product) return <></>;

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Otras Especificaciones',
          children: <>
            <Row justify={'center'} className={styles.panel}>
                <Col span={6} className={styles.panelLabel}>Fabricante</Col>
                <Col span={18}>{product.manufacturer}</Col>
            
                <Col span={6}  className={styles.panelLabel}>Peso del Producto</Col>
                <Col span={18}>{product.weight}</Col>
       
                <Col span={6}  className={styles.panelLabel}>Dimensiones</Col>
                <Col span={18}>{product.dimensions}</Col>
       
                <Col span={6}  className={styles.panelLabel}>País de Origen</Col>
                <Col span={18}>{product.countryOfOrigin}</Col>
          
                <Col span={6}  className={styles.panelLabel}>Número de modelo</Col>
                <Col span={18}>{product.modelNumber}</Col>
           
                <Col span={6}  className={styles.panelLabel}>Color</Col>
                <Col span={18}>{product.color}</Col>
           
                <Col span={6}  className={styles.panelLabel}>Material</Col>
                <Col span={18}>{product.material}</Col>
           
                <Col span={6}  className={styles.panelLabel}>Cantidad de piezas</Col>
                <Col span={18}>{product.numberOfPieces}</Col>
          
                <Col span={6}  className={styles.panelLabel}>Características especiales</Col>
                <Col span={18}>{product.specialFeatures}</Col>
            
                <Col span={6}  className={styles.panelLabel}>Componentes incluidos</Col>
                <Col span={18}>{product.componentsIncluded}</Col>
            </Row>
          </>
        },
        {
          key: '2',
          label: `Reviews (${product.reviews.length})`,
          children: <Row justify={'center'}>
            {product.reviews.map(
                (review) => <Col span={24}><Review user={review.reviewer} score={review.rating} comment={review.comment}></Review></Col>
            )}
          </Row>
        }
      ];

    return <Row style={{height: 400, overflowY:'auto'}}>
        <Tabs defaultActiveKey="1" items={items}/>
    </Row>;
};

export default Panel;