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
              I am proficient in a lot of tools and technologies, some of them  are mentioned 
              in the tech-stack. I'm a developer but I also focus heavily
              on design. My motive is always not only to create something, but to create something 
              with simple and sleek design. I'm currently working on some personal projects.
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
