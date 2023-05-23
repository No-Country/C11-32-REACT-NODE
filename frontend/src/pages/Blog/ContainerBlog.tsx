import Articulo from './Articulo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from "../../constants/data.ts";

const ContainerBlog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container" style={{ marginBottom: '20px' }}>
        <Slider {...settings}>
          <div>
            <img src="https://i.ibb.co/LSf3qcx/pexels-photo-4458554.jpg" alt="Imagen 1" />
          </div>
          <div>
            <img src="https://i.ibb.co/LSf3qcx/pexels-photo-4458554.jpg" alt="Imagen 2" />
          </div>
          <div>
            <img src="https://i.ibb.co/LSf3qcx/pexels-photo-4458554.jpg" alt="Imagen 3" />
          </div>
          <div>
            <img src="https://i.ibb.co/LSf3qcx/pexels-photo-4458554.jpg" alt="Imagen 3" />
          </div>
          <div>
            <img src="https://i.ibb.co/LSf3qcx/pexels-photo-4458554.jpg" alt="Imagen 3" />
          </div>
          <div>
            <img src="https://i.ibb.co/LSf3qcx/pexels-photo-4458554.jpg" alt="Imagen 3" />
          </div>
          {/* Agrega más elementos <div> con las imágenes deseadas */}
        </Slider>
      </div>
      <div className="card-container flex flex-wrap justify-center">
        {data.map((item) => (
          <Articulo
            key={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            subtitle={item.subtitle}
            enlaceblog={item.enlaceblog}
            description={item.description}
            channel={item.channel}
          />
        ))}
      </div>
    </>
  );
};

export default ContainerBlog;
