import React from 'react';
import Hero from '../Hero/Hero';
import Feature from '@/components/Feature/Feature';
import Testimonials from '@/components/Testimonials/Testimonials';
import Prices from '@/components/Prices/Prices';
import Carousel from '@/components/Carousel/Carousel';
import Benefits from '@/components/Benefits/Benefits';
import Steps from '@/components/Steps/Steps';
import Popup from '@/components/PopUp/PopUp';

const Home: React.FC = () => {
  return (
    <>
      <Popup /> {/* Mostrar ventana emergente */}
      <Hero />
      <Feature></Feature>
      <Carousel></Carousel>
      <Testimonials></Testimonials>
      <Benefits></Benefits>
      <Steps></Steps>
    </>
  );
};

export default Home;
