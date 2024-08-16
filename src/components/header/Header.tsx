import styles from './Header.module.css'
import CSS from "csstype";
import Logo from '../../assets/svg/Logotipo-Macropay.svg'
import { Button, Col, Row } from 'antd';
import { Cart } from '../../assets/svg/header/Cart';


function Header() {

    return (
    <div>
        <Row className={styles.bg}>
            <Row className={styles.container}>
                <Col className={styles.logoContainer}><img src={Logo}></img></Col>
                <Col className={styles.btnsContainer}>
                    <div className={styles.btns}>
                        <Button className={'yellowButton'}>Crea Tu Cuenta</Button>
                        <Button className={styles.btn2}>Iniciar Sesión</Button>
                        <div className={styles.iconContainer}>
                            <Cart className={styles.icon}></Cart>
                        </div>
                    </div>
                    {/* <div className={styles.circleContainer}>
                        <div className={styles.circle}>
                            <div className={styles.circleText}>
                                <h2>COMPRA A CRÉDITO</h2>
                            </div>
                        </div>
                    </div> */}
                </Col>
            </Row>
        </Row>
        <Row className={styles.menu}>
            <MenuOption label='Home'></MenuOption>
            <MenuOption label='Celulares'></MenuOption>
        </Row>
    </div>
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