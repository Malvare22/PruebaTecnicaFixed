import { Carousel } from "antd";
import img1 from '../../assets/img/img_banner_1.png'
import img2 from '../../assets/img/img_banner_2.png'
import './ImgCarousel.css'

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '400px',
    width: '100%'
};

const ImgCarousel: React.FC = () => {
    return <div style={{display: "flex", justifyContent: 'center'}}>
      <div style={{width: '80%', height: '400px'}}>
        <Carousel arrows infinite={false} className="imgCarouselStyles">
          <div style={contentStyle}><img src={img1} width={"100%"} height={400}></img></div>
          <div style={contentStyle}><img src={img2} width={"100%"} height={400}></img></div>
        </Carousel>
      </div>
    </div>;
}

export default ImgCarousel;