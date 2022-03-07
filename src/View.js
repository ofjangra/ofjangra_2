import React from 'react';
import About from './About';
import Intro from './Intro';
import PortfolioA from './PortfolioA';
import {Contact} from './Contact'
import Footer from './Footer';
import PortB from './PortB';
const View = () => {
  return(
    <>
    <div className='backFixed'>

    </div>
      <div className='main'>
        <Intro/>
        
       
        <PortB/>
        <PortfolioA/>
        <About />
        <Contact/>
        <Footer/>
      </div>
    </>
  )
};

export default View;
