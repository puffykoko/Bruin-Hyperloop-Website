import React from 'react';
import './About.css';
import './App.css';

import graphic1 from './images/graphics/rocket.svg';
import graphic2 from './images/graphics/sketch.svg';

var mission = "Our goal is to design and build a to-scale pod capable of\
               challenging in the annual SpaceX Hyperloop Competition. \
               Keep scrolling to see what we have in the works.";

var pdb = "We're currently working on our preliminary design brief.\
           Check back soon to learn more about the design of our pod.";

function ContentSection(props){
  return(
    <div className="ContentSection">
        <div className="Content-Section-Image" >
          <img src={props.imgURL}/>
        </div>
        <div className="Content-Section-Text">
          <h3 className="Content-Section-Title"> {props.title} </h3>
          <p> {props.text} </p>
          <a href={props.link}> <p> {props.linkText} </p> </a>
        </div>
    </div>
  );
}

function ContentSectionReverse(props){
  return(
    <div className="ContentSection Reverse">
      <div className="Content-Section-Text">
        <h3 className="Content-Section-Title"> {props.title} </h3>
        <p> {props.text} </p>
        <a href={props.link}> <p> {props.linkText} </p> </a>
      </div>
      <div className="Content-Section-Image"  >
        <img src={props.imgURL}/>
      </div>
    </div>
  );
}


function About() {
  return (
    <div>
      <div className="LogoBanner">
        <h1 className="Banner-Title">Bruin Hyperloop</h1>
        <p className="Banner-Text">Building the Future of Transportation</p>
      </div>

      <ContentSection
          title="Our Mission"
          text={mission}
          imgURL={graphic1}
      />

      <div className="Line"> </div>

      <ContentSectionReverse
          title="Preliminary Design Brief"
          text={pdb}
          imgURL={graphic2}
      />

    </div>
  );
}

export default About;
