import ReviewsScore from "../../components/reviews/ReviewsScore";
import BuyProtect from "../../assets/img/buy_protect.png"
import styles from "./ProductDetails.module.css"
import { oldPriceStyle, priceStyle } from "../../components/productCard/ProductCard";
import { Image, Tabs, TabsProps } from "antd";
import { CreditSection, Taxes } from "../../components/taxes/Taxes";
import { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Product } from "../../adapters/Product";
import { getProductById } from "../../services/getProducts";
import { ProductDetailContext } from "../../context/ProductDetailContext";

export default function ProductDetails(){

    const [searchParams] = useSearchParams();

    const id = searchParams.get('id');

    const [product, setProduct] = useState<Product | null>(null);

    useEffect(
        () => {
            if(id){
                setProduct(getProductById(parseInt(id)));
            }
            
        }, [id]
    )

    if(!product) return<></>;

    return <ProductDetailContext.Provider value={product}>
        <div className="container">
            <div className="sorterStyles" style={{display: 'flex'}}>
                <div className="label">Volver a resultados</div>
                <div>asdasdasd</div>
            </div>
            <div style={{display: 'flex'}}>
                <PreviewImg></PreviewImg>
                <GeneralInformation></GeneralInformation>
            </div>
            <div>Información Detallada del Producto</div>
            <div style={{display: 'flex'}}>
                <div style={{width: 560}}>
                    <ImgsProduct></ImgsProduct>
                </div>
                <div style={{marginLeft: '10px'}}>
                    <Panel></Panel>
                    <CreditSection></CreditSection>
                </div>
            </div>
        </div>
    </ProductDetailContext.Provider>
}

const onChange = (key: string) => {
    console.log(key);
  };

const ImgsProduct = () => {

    const product = useContext(ProductDetailContext);

    return<div className={styles.imgsProduct} style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px'}}>
        {
            product?.img.map(
                (img) => <div><Image width={200} height={300} src={img}></Image></div>
            )
        }
    </div>

};
  
const Panel = () => {

    const product = useContext(ProductDetailContext);

    if(!product) return <></>;

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: 'Otras Especificaciones',
          children: <div className={styles.panel}>
            <div>
                <div className={styles.panelLabel}>Fabricante</div>
                <div>{product.manufacturer}</div>
            </div>
            <div>
                <div className={styles.panelLabel}>Peso del Producto</div>
                <div>{product.weight}</div>
            </div>
            <div>
                <div className={styles.panelLabel}>Dimensiones</div>
                <div>{product.dimensions}</div>
            </div>
            <div>
                <div className={styles.panelLabel}>País de Origen</div>
                <div>{product.countryOfOrigin}</div>
            </div>
            <div>
                <div className={styles.panelLabel}>Número de modelo</div>
                <div>{product.modelNumber}</div>
            </div>
            <div>
                <div className={styles.panelLabel}>Color</div>
                <div>{product.color}</div>
            </div>
            <div>
                <div className={styles.panelLabel}>Material</div>
                <div>{product.material}</div>
            </div>
            <div>
                <div className={styles.panelLabel}>Cantidad de piezas</div>
                <div>{product.numberOfPieces}</div>
            </div>
            <div>
                <div className={styles.panelLabel}>Características especiales</div>
                <div>{product.specialFeatures}</div>
            </div>
            <div>
                <div className={styles.panelLabel}>Componentes incluidos</div>
                <div>{product.componentsIncluded}</div>
            </div>
          </div>
        },
        {
          key: '2',
          label: `Reviews (${product.reviews.length})`,
          children: <>
            {product.reviews.map(
                (review) => <Review user={review.reviewer} score={review.rating} comment={review.comment}></Review>
            )}
          </>
        }
      ];

    return <div style={{height: 380, width:500, overflowY:'auto'}}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>;
};

interface ReviewProps{
    user: string,
    score: number,
    comment: string
}

const Review : React.FC<ReviewProps> = ({user, score, comment}) => {
    return (
        <>
            <div style={{width: 400, padding: 10, height: 'auto', backgroundColor: 'white' }}>
                <div style={{ fontWeight: 'bold', fontSize: 16 }}>{user}</div>
                <div><ReviewsScore score={score} /></div>
                <div style={{ width: '100%', height: 'auto', wordBreak: 'break-word' }}>
                    <div>{comment}</div>
                </div>
            </div>
        </>
    );
};

const PreviewImg = () => {

    const [selectImg, setSelectImg] = useState(0);

    const product = useContext(ProductDetailContext);

    const handleImg = (value: number) => {
        setSelectImg(value);
    }

    return <div style={{display: "flex"}}>
        <div>
            {
                product?.img.map(
                    (img, i) => <div onClick={() => handleImg(i)}><img src={img} style={{background: 'black', width: 100, height: 100, margin: 10}}></img></div>
                )
            }
        </div>
        <div>
            <img src={product?.img[selectImg]} style={{background: 'black', width: 300, height: 430, margin: 10}}></img>
        </div>
    </div>;
};

const GeneralInformation = () => {
    return<div style={{width: 650, border: 'solid 1px black', padding: 4}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <div style={{width: 260, fontSize: 24, color: '#2B3445'}}>Samsung A10S 13+2MP 64GB, 4GB RAM</div>
                <div style={{marginTop: '10px', marginBottom: '10px'}}><ReviewsScore score={5}></ReviewsScore></div>
            </div>
            <div>
                <div style={ {fontSize: '30px', color: '#004AC1', fontWeight: 'bolder'}}>$3,499</div>
                <div style={{fontSize: '16px', marginTop: '-4px', color: '#7D879C', textAlign:'end', textDecorationLine: 'line-through'}}>$4,100</div>
            </div>
        </div>
        <div className={styles.description}>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco....</div>
            <div style={{color: '#004AC1', fontStyle: 'italic', marginTop: '6px'}}>- Ver más -</div>
        </div>
        <div className={styles.toRight}>
            <div style={{marginBottom: '10px'}}><img src={BuyProtect} width={300}></img></div>
            <div style={{fontSize: 10, color: '#E6406D'}}>La promoción vence en 24d 12h:43m</div>
        </div>
        <div>
            <img></img>
        </div>

    </div>;
}