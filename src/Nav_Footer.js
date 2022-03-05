import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GridViewIcon from '@mui/icons-material/GridView';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-scroll';
// import { Link } from 'react-router-dom';
const Header = () => {
  return (
      <>
        <nav className='navbar'>
            <div className='links'>
                <Link to ="intro" smooth = {true} duration = {1000}>
                <HomeIcon/>
                </Link>
               
                <Link to ="portA" smooth = {true} duration = {1000}>
                <GridViewIcon/>
                </Link>
                
                <Link to ="contact" smooth = {true} duration = {1000}>
                <MailIcon/>
                </Link>
              
            </div>
        </nav>
      </>
  )
};

export default Header;