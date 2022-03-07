
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import SearchIcon from '@mui/icons-material/Search';
const PortB = () =>{
    return(

        <>
        
        <div className = "pbMain">
           
            <div className='pbMainHeader'>
            <h2>Services</h2>
            <strong>...or say skills</strong>
            </div>
            
           <div className='dif'>
               <div className = "serviceContainer">
                   <div className='scHeader'>
                       <div className='serviceIcon'>
                           <CodeIcon/>
                       </div>
                       <strong>Front-end Development</strong>
                   </div>
                   <div className='serviceText'>
                       <p>
                       With an awesome stack of tools and technologies,
                       I create front-end applications which are fast,
                       SEO friendly,
                       and responsive.
                       For the non-React JS apps I use webpack for light-weight,
                       production-ready builds. 
                       </p>
                       
                   </div>
               </div>
               <div className = "serviceContainer">
                   <div className='scHeader'>
                       <div className='serviceIcon'>
                           <SearchIcon/>
                       </div>
                       <strong>Search Engine Optimization</strong>
                   </div>
                   <div className='serviceText'>
                       <p>
                    Development only is not enough. Websites also need to be ranked 
                    at a good position in search results.
                    Well I'm certified in SEO, and can handle that stuff also.
                    </p>
                   </div>
               </div>
           </div>
        </div>
        </>
    )
}
export default PortB