import { useContext } from "react";
import { Col, Image, Row } from "antd";
import { ProductDetailContext } from "../../../../context/ProductDetailContext";
import styles from "../../ProductDetails.module.css"

const ImgsProduct = () => {

    const product = useContext(ProductDetailContext);

    return<Row className={styles.imgsProduct} justify={"center"}>
        {
            product?.img.map(
                (img) => <Col span={12}><Image width={'100%'} height={'100%'} src={img}></Image></Col>
            )
        }
    </Row>

};

export default ImgsProduct;