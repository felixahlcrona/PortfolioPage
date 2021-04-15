import React, { useState } from 'react';
// @ts-ignore
import { Fade } from 'react-reveal';
import './App.css';
import { FcSettings,FcAddDatabase,FcTemplate,FcVoicePresentation,FcScatterPlot } from 'react-icons/fc';

const Skills: React.FC = () => {

  return <div className="container">
    <Fade top cascade>
    <div className="boxContainer">
    <div className="box"><h3><FcSettings /> <br></br>Web crawlers</h3> <p>Experience in creating threaded crawlers targeting large sites to extract product data</p></div>
    <div className="box"><h3><FcAddDatabase /> <br></br>Databases</h3> <p>Experience in creating, querying SQL-databases </p></div>
    <div className="box"><h3><FcTemplate /> <br></br>Blazor SPA</h3> <p>Experience in creating SPA sites and systems using Blazor Serverside/Assembly </p></div>
    <div className="box"><h3><FcVoicePresentation /> <br></br>Development life cycle </h3> <p>Experience in planning, defining Requirements, designing and developing from idea to working product </p></div>
    <div className="box"><h3><FcScatterPlot /> <br></br>Machinelearning - ML.NET </h3> <p>Experience in creating machine learning models with ML.NET, created product recommendation,sentiment analysis, image classification, sales spike detection models  </p></div>
  </div>
    </Fade>
 
  </div>
}

export default Skills;
