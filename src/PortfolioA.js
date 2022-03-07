import React from 'react';

const PortfolioA = () => {
  return(
      <>
          <div className='portfolioAMain' id = "portA">
            <div className='pamHeader'>
            <h2>The <br/> Tech Stack</h2>
         <strong>...and it is always expending</strong>
            </div>
         
         <div className='iconsGrid'>
           <div className='iconCover'>
             <img src = "./img/js.svg" alt = "icon"></img>
           </div>
           <div className='iconCover'>
             <img src = "./img/git.svg" alt = "icon"></img>
           </div>
           <div className='iconCover'>
             <img src = "./img/webpack.svg" alt = "icon"></img>
           </div>
           <div className='iconCover'>
             <img src = "./img/react.svg" alt = "icon"></img>
           </div>
           <div className='iconCover'>
             <img src = "./img/redux.svg" alt = "icon"></img>
           </div>
           <div className='iconCover'>
             <img src = "./img/formik.svg" alt = "icon"></img>
           </div>
           <div className='iconCover'>
             <img src = "./img/tailwind.svg" alt = "icon"></img>
           </div>
           <div className='iconCover'>
             <img src = "./img/css.svg" alt = "icon"></img>
           </div>
           <div className='iconCover'>
             <img src = "./img/sass.svg" alt = "icon"></img>
           </div>
         </div>
          </div>
      </>
  );
};

export default PortfolioA;
