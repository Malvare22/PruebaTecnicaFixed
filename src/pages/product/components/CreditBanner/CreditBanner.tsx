import { Col, Row } from "antd";
import styles from "./CreditBanner.module.css"
import { ChevronRight } from "../../../../assets/svg/ChevronRight";
import CreditPrice from "../../../../assets/svg/productDetail/CreditPrice";

const CreditBanner = () => {

    return<Row style={{width: '100%'}} justify={'space-between'} align={'middle'}>
        <Col span={5}><Graphic></Graphic></Col>
        <Col span={19}><SetCells></SetCells></Col>
    </Row>;

    

};

const Graphic = () => {
    return<Row className={styles.graphics}>
        <div className={styles.circle}>
            HOY
        </div>
        <div className={styles.creditPrice}>
            <CreditPrice></CreditPrice>
            <div style={{position: 'relative', color: 'white'}}>
                <div style={{fontSize: '14px', position: 'absolute', left: '80px', top: '-120px'}}>Desde</div>
                <div style={{fontSize: '40px', fontWeight: 'bold', position: 'absolute', left: '80px', top: '-110px'}}>$196</div>
                <div style={{fontSize: '16px', position: 'absolute', left: '100px', top: '-60px'}}>SEMANAL</div>
            </div>
        </div>
    </Row>;
}

const SetCells = () => {
    return<Row align={'middle'} style={{backgroundColor: '#FFFFFF', border: '1px black solid', height:'140px', width: '100%'}}>
        <Cell text="Aplica tú crédito!" number={1}></Cell>
        <Cell text="Verifica tu compra" number={2}></Cell>
        <Cell text="Disfruta tu celular" number={3}></Cell>
    </Row>
}

interface CellProps{
    text: string,
    number: number
}

const Cell:React.FC<CellProps> = ({text, number}) => {
    return <>
        <Col offset={number == 1 ? 1 : 0} span={7} style={{padding: '16px', paddingTop:'10px'}}>
            <Row justify={"center"} align={'middle'} style={{color:'#FFFFFF', fontWeight: 'bold', backgroundColor: '#4B566B', fontSize: '10px', width:'32px', height: '32px', borderRadius: '50px'}}>{number}</Row>
            <Row style={{marginTop:'20px'}}>{text}</Row>
        </Col>
        {number!=3 && <Sep></Sep>}
    </>;
}   

const Sep = () => {
    return <Col span={1} className={styles.arrow}>
       <ChevronRight></ChevronRight>
    </Col>
};

export default CreditBanner;