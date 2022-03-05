import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () =>{
    return(
        <>
        <footer className='footerMain'>
            <div className='socialLinks'>
                <a href  = 'https://github.com/ofjangra'>
                <GitHubIcon/>
                </a>
                <a href = "https://www.linkedin.com/in/naresh-jangra-551523173/">
                <LinkedInIcon/>
                </a>
                <a href = "https://instagram.com/ofjangra">
                <InstagramIcon/>
                </a>
            </div>
            <p>by: Naresh Jangra</p>
        </footer>
        </>
    )
}

export default Footer