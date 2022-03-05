import React from 'react';
import About from './About';
import Intro from './Intro';
import PortfolioA from './PortfolioA';
import {Contact} from './Contact'
import Footer from './Footer';
const View = () => {
  return(
    <>
    <div className='backFixed'>

    </div>
      <div className='main'>
        <Intro/>
        <About />
        <PortfolioA/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
};

export default View;
