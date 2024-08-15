import styles from './Footer.module.css'
import { Layer_1 } from '../../assets/svg/footer/Layer_1';
import { Layer_2 } from '../../assets/svg/footer/Layer_2';
import { Plane } from '../../assets/svg/footer/Plane';
import Logo from '../../assets/svg/Logotipo-Macropay.svg'
import WhatsApp from '../../assets/svg/footer/whatsapp.svg'
import Facebook from '../../assets/svg/footer/facebook.svg'
import Linkedin from '../../assets/svg/footer/linkedin.svg'
import Instagram from '../../assets/svg/footer/instagram.svg'
import { HappyFace } from '../../assets/svg/Happyface';


function Footer() {

    return (
    <div className={styles.container}>
        <div className={styles.layer2}><Layer_2></Layer_2></div>
        <div className={styles.layer1}><Layer_1></Layer_1></div>
        <div className={styles.textContainer}>
            <div style={{width: "33%", paddingTop: '90px'}}>
                <div style={{fontSize: '12px', color: '#013E9B', fontWeight: 'bolder', marginBottom: "12px"}}>
                    OFERTAS Y PROMOCIONES
                </div>
                <div style={{color: '#2B3445', fontSize: '30px', fontWeight: 'bolder'}}>
                    No te pierdas <br></br>nuestras ofertas!
                </div>
                <div style={{marginTop: "12px"}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center', borderBottom: 'solid'}}>
                        <input style={{color: '#2B3445', fontSize: '14px', fontWeight:'normal', display: 'flex', alignContent: 'center', width: '100%', backgroundColor: '#FFD300', border: 'none'}} placeholder='Tu dirección de correo electrónico'></input>
                        <div style={{margin: '10px'}}><Plane></Plane></div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '40px', marginBottom: '20px'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', backgroundColor: '#0038AE', width: '120px', borderRadius: '10px', height: '40px'}}>
                        <img src={Logo} width={"100px"}></img>
                    </div>
                    <div style={{color: '#2B3445', fontSize: '12px'}}>
                        <div>Envíos y devoluciones</div>
                        <div style={{marginTop: '10px'}}>Preguntas Frecuentes</div>
                    </div>
                    <div style={{color: '#2B3445', fontSize: '12px'}}>
                        <div>Envíos y devoluciones</div>
                        <div style={{marginTop: '10px'}}>Preguntas Frecuentes</div>
                    </div>
                </div>
                <div style={{fontSize: '8px'}}>
                    Todos los derechos reservados - © Macropay 2022
                </div>
            </div>
            <div className={styles.happyFace} style={{width: '30%', display: 'flex', paddingTop: '150px', alignItems: 'center', justifyContent: 'center'}}>
                <HappyFace></HappyFace>
            </div>
            <div style={{paddingTop: '200px'}}>
                <div style={{color: '#2B3445', fontSize: '26px', fontWeight: 'bolder', marginBottom: '10px'}}>Conversemos!</div>
                <div style={{color: '#2B3445', fontSize: '12px'}}>Loren ipsum dolor sit amet</div>
                <div className={styles.icons}>
                    <img src={Facebook}></img>
                    <img src={Instagram}></img>
                    <img src={Linkedin}></img>
                    <img src={WhatsApp}></img>
                </div>
            </div>
        </div>
    </div>
    )
  }


  
  export default Footer