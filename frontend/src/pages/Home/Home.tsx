import React from 'react';
import Hero from '../Hero/Hero';
import "./Home.css"
const Home: React.FC = () => {
  return (
    <div className="home-container">
    <Hero />
    {/* ...otros elementos... */}
  </div>
  );
}

export default Home;

