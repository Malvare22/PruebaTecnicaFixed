import { Button, Card, Col, InputNumber, Row, Slider, Switch } from 'antd';
import styles from './Taxes.module.css';
import React, { useState } from 'react';
import { Product } from '../../adapters/Product';
import { HappyFace } from '../../assets/svg/Happyface';
import TaxesLayer1 from '../../assets/svg/productDetail/TaxesLayer1';
import TaxesLayer2 from '../../assets/svg/productDetail/TaxesLayer2';
import { Check } from '../../assets/svg/Check';

const formatter = (value?: number | undefined) => `${value}%`;

interface TaxesProps{
    product?: Product
}

export const CreditSection = () => {
    return <div className={styles.creditContainer}>
        <div className={styles.layer1}><div><TaxesLayer1></TaxesLayer1></div></div>
        <div className={styles.layer2}><div><TaxesLayer2></TaxesLayer2></div></div>
        {/* <Taxes></Taxes>
        <Letter></Letter> */}
    </div>;
};

const Letter = () => {
    return<div className={styles.letter}>
        <div style={{fontSize: 28, fontStyle: 'italic', color: '#FFFFFF', marginBottom: '20px'}}>Lleva este celular <br></br> a Crédito!</div>
        <div style={{fontSize: 20, color: '#FFD300', marginBottom: '16px'}}>¿Qué necesitas?</div>
        <LetterIl text='Tu Cuenta de Facebook'></LetterIl>
        <LetterIl text='Tu INE Vigente'></LetterIl>
        <LetterIl text='Correo electrónico'></LetterIl>
    </div>;
};

interface LetterIlProps{
    text: string
}

const LetterIl: React.FC<LetterIlProps> = ({text}) => {
    return<div className={styles.letterIl}>
        <Check></Check>{text}
    </div>;
}


export const Taxes:React.FC<TaxesProps> = ({product}) => {

    const [inputValue, setInputValue] = useState(15);
    const onChange = (newValue: number) => {
        setInputValue(newValue);
    };
    // const getValue = () => {
    //     return getPercentage(product['price'], inputValue);
    // }

    return <>
        <Card className={styles.calculate}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className={styles.smile_face}><HappyFace></HappyFace></div>
            </div>
            <div className={styles.tittle}>¿Te falta una lanita?</div>
            {/* <div className={styles.price}>PAGO SEMANAL ${Math.ceil(getValue()/4)}</div>
            <div className={styles.price}>ENGANCHE ${getValue()}</div> */}
            <div className={styles.slice}>
                <Slider value={inputValue} onChange={onChange} tooltip={{
                    formatter,
                }}/>        
            </div>
            <div className={styles.text}>
                <div>Enganche</div>
            </div>
            <div className={styles.btn}><Button>Aplica ahora</Button></div>
            <div className={styles.terms}>*Hasta $2,000 de manera fácil, rápida y confiable</div>
        </Card>
    </>
}
