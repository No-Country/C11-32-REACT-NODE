import React from 'react';
import Hero from '../Hero/Hero';
import Feature from '@/components/Feature/Feature';
import Testimonials from '@/components/Testimonials/Testimonials';
import Carousel from '@/components/Carousel/Carousel';
import Benefits from '@/components/Benefits/Benefits';
import Steps from '@/components/Steps/Steps';
import Countries from '@/components/Countries/Countries';
import Footer from '@/components/Footer/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Feature></Feature>
      <Carousel></Carousel>
      <Testimonials></Testimonials>
      <Benefits></Benefits>
      <Steps></Steps>
      <Countries></Countries>
      <Footer></Footer>
    </>
  );
};

export default Home;
