import React from 'react';
import "./hero.css"
import Header from '../Header/Header';

const Hero = () => {
  return (
    <>
      <Header/>
    <div className='hero-holder'>
        <div className='hero-wrapper'>
          <div className='hero-left'>
            <h2>
              it's not just food,it's an experience
            </h2>
            <div>

            <button className='active-btn'>View More</button>
            <button>Book a table</button>
            </div>
          </div>
          <div className='hero-right'>
           
          </div>
        </div>
    </div>
    </>
    
  )
}

export default Hero