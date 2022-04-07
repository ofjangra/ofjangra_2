import React from "react";
import { Link } from "react-scroll";
const About = () => {
  return (
    <>
      <div className="aboutMain" id = "about">
      <h2>about</h2>
        <div className="aboutContainer">
          <div className="heroImg">
            <img src="./img/s1.jpg" alt="Naresh Jangra" />
          </div>
          
          <div className="aboutText" id = "about">
          
         
  
            <p>
              Hi, I am Naresh Jangra. I am a front-end developer based in Haryana.
              From almost three years, I've been learning and practicing web technologies.
              Today I am proficient in a bunch of tools and technologies like: 
              Javascript, ReactJS, Redux, Webpack, SEO, Git, HTML5, CSS etc.
              I keep learning continuously and thus adding more skills in my skillset.
            </p>
            <div className="aboutContactBtn">
              <Link to = "contact" smooth= {true} duration= {1000}>
              <button>Contact</button>


              </Link>
          </div>
          </div>
          
        
        </div>
      </div>
    </>
  );
};

export default About;
