import React from 'react';
import Gallery from '../components/Gallery';

// import components
import Hero from '../components/Hero';
import Info from '../components/Info';
import Service from '../components/Service';

const Home = () => {
  return (
    <div>
      <Hero />
      <Info />
      <Service />
      <Gallery />
    </div>
  );
};

export default Home;
