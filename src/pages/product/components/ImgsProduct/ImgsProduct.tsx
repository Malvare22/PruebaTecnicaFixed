import { useContext } from "react";
import { Col, Image, Row } from "antd";
import { ProductDetailContext } from "../../../../context/ProductDetailContext";
import styles from "../../ProductDetails.module.css"

const ImgsProduct = () => {

    const product = useContext(ProductDetailContext);

    return<Row gutter={[10,10]} className={styles.imgsProduct} justify={"center"}>
        {
            product?.img.map(
                (img) => <Col span={12}><Image width={'100%'} height={'400px'} src={img}></Image></Col>
            )
        }
    </Row>

};

export default ImgsProduct;