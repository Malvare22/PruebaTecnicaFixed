import styles from './Header.module.css'
import CSS from "csstype";
import Logo from '../../assets/header/Logotipo-Macropay.svg'
import { Button } from 'antd';
import { Cart } from '../../assets/header/Cart';


function Header() {

    return (
    <div>
        <div className={styles.bg}>
            <div className={styles.container}>
                <div className={styles.logoContainer}><img src={Logo}></img></div>
                <div className={styles.btnsContainer}>
                    <div className={styles.btns}>
                        <Button className={styles.btn1}>Crea Tu Cuenta</Button>
                        <Button className={styles.btn2}>Iniciar Sesión</Button>
                        <div className={styles.iconContainer}>
                            <Cart className={styles.icon}></Cart>
                        </div>
                    </div>
                    <div className={styles.circleContainer}>
                        <div className={styles.circle}>
                            <div className={styles.circleText}>
                                <h2>COMPRA A CRÉDITO</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.menu}>
            <MenuOption label='Home'></MenuOption>
            <MenuOption label='Celulares'></MenuOption>
        </div>
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