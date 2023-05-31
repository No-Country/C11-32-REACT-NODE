import React from 'react';
import Hero from '../Hero/Hero';
import "./Home.css"
import Feature from '@/components/Feature/Feature';
import Testimonials from '@/components/Testimonials/Testimonials';
const Home: React.FC = () => {
  return (
    <>
    <Hero />
    <Feature></Feature>
    <Testimonials></Testimonials>
    </>
  );
}

export default Home;

