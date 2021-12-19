import React from 'react';
import selfie from '../images/selfie.jpg';

const Aboutme = () => {
  return (
    <div className="wrapper" id="aboutme">
      <h1 className="aboutme-title">About me</h1>
      <div className="aboutme-wrapper">
          <div className="aboutme-self-info">
            <p>Hello. I am a front-end web developer with a passion for building web applications with React.</p>
            <p>With ten years of experience in marketing and the sales field, 
              I am drilled to prioritize customer demands.</p> 
            <p>Working with JavaScript, React, HTML, CSS, MaterialUI, Node, RestAPI, MongoDB(Database)</p>
          </div>
          <img src={selfie} alt="selfie" className="aboutme-selfie" />
        </div>
    </div>
  )
}

export default Aboutme
