import { useContext, useState } from "react";
import { ProductDetailContext } from "../../../../context/ProductDetailContext";
import { Col, Row } from "antd";

export const PreviewImg = () => {

    const [selectImg, setSelectImg] = useState(0);

    const product = useContext(ProductDetailContext);

    const handleImg = (value: number) => {
        setSelectImg(value);
    }

    return <Row style={{height:'400px'}} align={"middle"}>
        <Col span={4}>
            <Row gutter={[0 ,24]}>
                {
                    product?.img.map(
                        (img, i) => <Row onClick={() => handleImg(i)}><img src={img} width={'100%'}></img></Row>
                    )
                }
            </Row>
        </Col>
        <Col span={18}>
            <img src={product?.img[selectImg]} style={{background: 'black', margin: 10}} width={'100%'} height={'400px'}></img>
        </Col>
    </Row>;
};

export default PreviewImg;