import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fondo } from "@/assets";
const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
<div
  className='padre'
  style={{
    background: `url(${fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent' // Cambia el color de fondo a transparente
  }}
>
        <div className="carousel-container" style={{ margin: '0 auto', width: '80%' }}>
          <div className="text-center mb-8">
          <div className="text-container">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl py-3">
    English learners from all over the world!
  </h2>
</div>

      </div>
  <Slider {...settings}>
    <div> 
      <div className="relative flex grow-0 shrink-0 basis-full md:basis-80 3xl:basis-[340px] mr-12  " >
        <div className="absolute top-2 right-2 rounded-full w-10 h-10 lg:w-16 lg:h-16">
          <span>
            <img
              alt="Flag"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              src="https://i.ibb.co/Km44SGK/BR-7fc58273.png"
              style={{ color: 'transparent' }}
            />
          </span>
        </div>
        <img
          alt="Estudiante de Brasil"
          loading="lazy"
          width="512"
          height="512"
          decoding="async"
          data-nimg="1"
          className="w-full object-cover h-80 3xl:h-[340px] rounded-3xl"
          src="https://i.ibb.co/kKZdC1h/m21-4a190a80.jpg"
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
    <div>
      <div className="relative flex grow-0 shrink-0 basis-full md:basis-80 3xl:basis-[340px] mr-12">
        <div className="absolute top-2 right-2 rounded-full w-10 h-10 lg:w-16 lg:h-16">
          <span>
            <img
              alt="Flag"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              src="https://i.ibb.co/0rdxyvG/KR-2f565722.png"
              style={{ color: 'transparent' }}
            />
          </span>
        </div>
        <img
          alt="Estudiante de Korea"
          loading="lazy"
          width="512"
          height="512"
          decoding="async"
          data-nimg="1"
          className="w-full object-cover h-80 3xl:h-[340px] rounded-3xl"
          src="https://i.ibb.co/MCtcc9m/m20-1d7de35d.jpg"
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
    <div>
      <div className="relative flex grow-0 shrink-0 basis-full md:basis-80 3xl:basis-[340px] mr-12">
        <div className="absolute top-2 right-2 rounded-full w-10 h-10 lg:w-16 lg:h-16">
          <span>
            <img
              alt="Flag"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              src="https://i.ibb.co/fvSFCV5/AR-43371ffb.png"
              style={{ color: 'transparent' }}
            />
          </span>
        </div>
        <img
          alt="Estudiante de Argentina"
          loading="lazy"
          width="512"
          height="512"
          decoding="async"
          data-nimg="1"
          className="w-full object-cover h-80 3xl:h-[340px] rounded-3xl"
          src="https://i.ibb.co/2M4zMvr/m8-b660dc82.jpg"
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
    <div>
      <div className="relative flex grow-0 shrink-0 basis-full md:basis-80 3xl:basis-[340px] mr-12">
        <div className="absolute top-2 right-2 rounded-full w-10 h-10 lg:w-16 lg:h-16">
          <span>
            <img
              alt="Flag"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              src="https://i.ibb.co/BwHLj15/BE-94035bc0.png"
              style={{ color: 'transparent' }}
            />
          </span>
        </div>
        <img
          alt="Estudiante de Alemania"
          loading="lazy"
          width="512"
          height="512"
          decoding="async"
          data-nimg="1"
          className="w-full object-cover h-80 3xl:h-[340px] rounded-3xl"
          src="https://i.ibb.co/mHVb7GZ/m13-1f9638ad.jpg"
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
    <div>
      <div className="relative flex grow-0 shrink-0 basis-full md:basis-80 3xl:basis-[340px] mr-12">
        <div className="absolute top-2 right-2 rounded-full w-10 h-10 lg:w-16 lg:h-16">
          <span>
            <img
              alt="Flag"
              loading="lazy"
              width="128"
              height="128"
              decoding="async"
              data-nimg="1"
              src="https://i.ibb.co/gz2Hc3k/IT-6de7c089.png"
              style={{ color: 'transparent' }}
            />
          </span>
        </div>
        <img
          alt="Estudiante de Mexico"
          loading="lazy"
          width="512"
          height="512"
          decoding="async"
          data-nimg="1"
          className="w-full object-cover h-80 3xl:h-[340px] rounded-3xl"
          src="https://i.ibb.co/2yVxQCr/m17-61e4beee.jpg"
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
    <div>
      <div className="relative flex grow-0 shrink-0 basis-full md:basis-80 3xl:basis-[340px] mr-12">
        <div className="absolute top-2 right-2 rounded-full w-10 h-10 lg:w-16 lg:h-16">
          <span>
            <img
              alt="Flag"
              loading="lazy"
              width="128"
              height="128"
              src="https://i.ibb.co/y6T7j7S/US-a00178a2.png"
              style={{ color: 'transparent' }}
            />
          </span>
        </div>
        <img
          alt="Estudiante de USA"
          loading="lazy"
          width="512"
          height="512"
          decoding="async"
          data-nimg="1"
          className="w-full object-cover h-80 3xl:h-[340px] rounded-3xl"
          src="https://i.ibb.co/hYfy44w/m10-3d52680d.jpg"
          style={{ color: 'transparent' }}
        />
      </div>
    </div>
  </Slider>
</div>
    </div>
       
      
    </>
  );
};

export default Carousel;
