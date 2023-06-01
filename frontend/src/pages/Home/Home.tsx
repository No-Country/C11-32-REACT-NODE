import React from 'react';
import Hero from '../Hero/Hero';
import "./Home.css"
import Feature from '@/components/Feature/Feature';
import Testimonials from '@/components/Testimonials/Testimonials';
import Prices from '@/components/Prices/Prices';
import Carousel from '@/components/Carousel/Carousel';
import Benefits from '@/components/Benefits/Benefits';
import Steps from '@/components/Steps/Steps';
const Home: React.FC = () => {
  return (
    <>
    <Hero />
    <Feature></Feature>
    <Carousel></Carousel>
    <Prices></Prices>

    <Testimonials></Testimonials>

    <Benefits></Benefits>
    <Steps></Steps>
    </>
  );
}

export default Home;

