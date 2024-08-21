import styles from './Header.module.css'
import CSS from "csstype";
import Logo from '../../assets/svg/Logotipo-Macropay.svg'
import { Button, Col, Row, Space } from 'antd';
import { Cart } from '../../assets/svg/header/Cart';
import { Link } from 'react-router-dom';


function Header() {

    return (
    <Row>
        <Row className={styles.bg} align={'middle'}>
            <Col offset={1} span={7} className={styles.logoContainer}><img src={Logo}></img></Col>
            <Col span={10} offset={5} className={styles.btnsContainer}>
                <Row>
                    <Col offset={3}>
                        <Space>
                            <Col><Button className={'yellowButton'}>Crea Tu Cuenta</Button></Col>
                            <Col><Button className={styles.btn2}>Iniciar Sesión</Button></Col>
                            <Col>
                                <Row className={styles.iconContainer} justify={'center'} align={'middle'}>
                                    <Cart className={styles.icon}></Cart>
                                </Row>
                            </Col>
                        </Space>
                    </Col>
                    
                </Row>
            </Col>
            <div className={styles.circle}>
                <h3>COMPRA A</h3>
                <h2>CRÉDITO</h2>
            </div>
        </Row>
        <Row className={styles.menu} align={'middle'}>
            <Col offset={1}>
                <MenuOption label='Home' redirect='/'></MenuOption>
            </Col>
            <Col offset={1}>
                <MenuOption label='Celulares' redirect='/?category=phone'></MenuOption>
            </Col>
            <Col offset={1}>
                <MenuOption label='Motocicletas' redirect='?category=motorcycle'></MenuOption>
            </Col>
        </Row>
    </Row>
    )
  }

  interface MenuOptionProps{
    label: string;
    redirect: string
  }

  const MenuOption = ({label, redirect}: MenuOptionProps) => {
    return <>
        <Link to={redirect} className={styles.menuOption}>{label}</Link>
    </>;
  };
  
  export default Header