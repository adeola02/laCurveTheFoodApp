import React from 'react';
import "./Home.css"
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Cards from './cards/Cards';

const Home = () => {
  return (
    <div>
        {/* <Header/> */}
        <Hero/>
        <Cards/>
    </div>
  )
}

export default Home