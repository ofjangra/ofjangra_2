import React from "react";
import { Link } from "react-scroll";
const About = () => {
  return (
    <>
      <div className="aboutMain" id = "about">
      <h2>about</h2>
        <div className="aboutContainer">
          <div className="heroImg">
            <img src="./img/p1.jpeg" alt="Naresh Jangra" />
          </div>
          
          <div className="aboutText" id = "about">
          
         
            <p>
              Hi, I am Naresh Jangra. I am a front-end developer, based in Haryana. From alomost two
              years I have been continuesly learning, and practicing web technologies.
              Today I'm proficient in a bunch of modern web technologies like: HTML, CSS, SASS
              Tailwind, Javascript, React, Node.JS, Express.JS. I'm continuesly expending my tech stack
              and looking forward to create something awesome.
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
