import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter'

const Footer = () =>{
    return(
        <>
        <footer className='footerMain'>
            <div className='socialLinks'>
                <a href  = 'https://github.com/ofjangra' rel = "follow" title='github'>
                <GitHubIcon/>
                </a>
                <a href = "https://www.linkedin.com/in/naresh-jangra-551523173/" rel='follow' title='linked in'>
                <LinkedInIcon/>
                </a>
                <a href = "https://instagram.com/ofjangra" rel = "follow" title='instagram'>
                <InstagramIcon/>
                </a>
                <a href = "https://Twitter.com/ofjangra" rel = "follow" title='twitter'>
                <Twitter/>
                </a>
            </div>
            <p>by: Naresh Jangra</p>
        </footer>
        </>
    )
}

export default Footer