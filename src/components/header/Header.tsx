import styles from './Header.module.css'
import CSS from "csstype";
import Logo from '../../assets/svg/Logotipo-Macropay.svg'
import { Button, Col, Row, Space } from 'antd';
import { Cart } from '../../assets/svg/header/Cart';


function Header() {

    return (
    <Row>
        <Row className={styles.bg} align={'middle'}>
            <Col offset={1} span={12} className={styles.logoContainer}><img src={Logo}></img></Col>
            <Col span={11} className={styles.btnsContainer}>
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
                    <Col span={7} className={styles.circleContainer}>
                        <div className={styles.circle}>
                            <h3>COMPRA A</h3>
                            <h2>CRÉDITO</h2>
                        </div>
                    </Col>
                </Row>
            </Col>
            </Row>
        <Row className={styles.menu} align={'middle'}>
            <Col offset={1}>
                <MenuOption label='Home'></MenuOption>
            </Col>
            <Col offset={1}>
                <MenuOption label='Celulares'></MenuOption>
            </Col>
        </Row>
    </Row>
    )
  }

  interface MenuOptionProps{
    label: string;
    redirect?: string
  }

  const MenuOption = ({label, redirect}: MenuOptionProps) => {
    return <>
        <div className={styles.menuOption}>{label}</div>
    </>;
  };
  
  export default Header