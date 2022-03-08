import React from 'react';
import Tooltip from '@mui/material/Tooltip';
const PortfolioA = () => {
  return(
      <>
          <div className='portfolioAMain' id = "portA">
            <div className='pamHeader'>
            <h2>The <br/> Tech Stack</h2>
         <strong>...and it is always expending</strong>
            </div>
         
         <div className='iconsGrid'>
           <Tooltip title = "Javascript">
           <div className='iconCover'>
             <img src = "./img/js.svg" alt = "icon"></img>
           </div>
           </Tooltip>
           <Tooltip title = "Git">
           <div className='iconCover'>
             <img src = "./img/git.svg" alt = "icon"></img>
           </div>
           </Tooltip>
           <Tooltip title = "Webpack">
           <div className='iconCover'>
             <img src = "./img/webpack.svg" alt = "icon"></img>
           </div>
           </Tooltip>
           <Tooltip title ="React JS">
           <div className='iconCover'>
             <img src = "./img/react.svg" alt = "icon"></img>
           </div>
           </Tooltip>
           <Tooltip title="Redux">
           <div className='iconCover'>
             <img src = "./img/redux.svg" alt = "icon"></img>
           </div>
           </Tooltip>
           <Tooltip title = "Formik">
           <div className='iconCover'>
             <img src = "./img/formik.svg" alt = "icon"></img>
           </div>
           </Tooltip>
           <Tooltip title = "Tailwind">
           <div className='iconCover'>
             <img src = "./img/tailwind.svg" alt = "icon"></img>
           </div>
           </Tooltip>
           <Tooltip title = "CSS">
           <div className='iconCover'>
             <img src = "./img/css.svg" alt = "icon"></img>
           </div>
           </Tooltip>
           <Tooltip title = "SASS">
           <div className='iconCover'>
             <img src = "./img/sass.svg" alt = "icon"></img>
           </div>
           </Tooltip>
         </div>
          </div>
      </>
  );
};

export default PortfolioA;
