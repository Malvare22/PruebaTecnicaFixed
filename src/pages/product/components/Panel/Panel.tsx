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
          children: <div className={styles.panel}>
            <Row>
                <Col span={6} className={styles.panelLabel}>Fabricante</Col>
                <Col span={18}>{product.manufacturer}</Col>
            </Row>
            <Row>
                <Col span={6}  className={styles.panelLabel}>Peso del Producto</Col>
                <Col span={18}>{product.weight}</Col>
            </Row>
            <Row>
                <Col span={6}  className={styles.panelLabel}>Dimensiones</Col>
                <Col span={18}>{product.dimensions}</Col>
            </Row>
            <Row>
                <Col span={6}  className={styles.panelLabel}>País de Origen</Col>
                <Col span={18}>{product.countryOfOrigin}</Col>
            </Row>
            <Row>
                <Col span={6}  className={styles.panelLabel}>Número de modelo</Col>
                <Col span={18}>{product.modelNumber}</Col>
            </Row>
            <Row>
                <Col span={6}  className={styles.panelLabel}>Color</Col>
                <Col span={18}>{product.color}</Col>
            </Row>
            <Row>
                <Col span={6}  className={styles.panelLabel}>Material</Col>
                <Col span={18}>{product.material}</Col>
            </Row>
            <Row>
                <Col span={6}  className={styles.panelLabel}>Cantidad de piezas</Col>
                <Col span={18}>{product.numberOfPieces}</Col>
            </Row>
            <Row>
                <Col span={6}  className={styles.panelLabel}>Características especiales</Col>
                <Col span={18}>{product.specialFeatures}</Col>
            </Row>
            <Row>
                <Col span={6}  className={styles.panelLabel}>Componentes incluidos</Col>
                <Col span={18}>{product.componentsIncluded}</Col>
            </Row>
          </div>
        },
        {
          key: '2',
          label: `Reviews (${product.reviews.length})`,
          children: <>
            {product.reviews.map(
                (review) => <Review user={review.reviewer} score={review.rating} comment={review.comment}></Review>
            )}
          </>
        }
      ];

    return <Col span={16} offset={1} style={{height: 380, overflowY:'auto'}}>
        <Tabs defaultActiveKey="1" items={items}/>
    </Col>;
};

export default Panel;