import React, { useState } from 'react';
// @ts-ignore
import { Fade } from 'react-reveal';
import './App.css';
import { FcSettings,FcAddDatabase,FcTemplate,FcVoicePresentation,FcScatterPlot,FcSelfServiceKiosk,FcTimeline } from 'react-icons/fc';

const Skills: React.FC = () => {

  return <div className="container">
    <Fade top cascade>
    <div className="boxContainer">   

    <div className="box"><h3><FcSelfServiceKiosk /> <br></br>Enterprise software</h3> <p>Experience in creating inhouse applications like real estate system, helpdesk system, graphical signs system, price comparing system etc </p></div>
    <div className="box"><h3><FcTemplate /> <br></br>Blazor SPA</h3> <p>Experience in creating SPA sites for public and internal use with Blazor Serverside/Assembly </p></div>
    <div className="box"><h3><FcTemplate /> <br></br>.NET MVC</h3> <p>Experience in creating inhouse applications with .NET MVC framework/Core </p></div>
    <div className="box"><h3><FcScatterPlot /> <br></br>Machinelearning </h3> <p>Experience in creating machine learning models with ML.NET, created product recommendation,sentiment analysis, image classification, sales spike detection models  </p></div>
    <div className="box"><h3><FcSettings /> <br></br>Web crawlers</h3> <p>Experience in creating threaded crawlers targeting several sites to extract product data</p></div>
    <div className="box"><h3><FcAddDatabase /> <br></br>Databases</h3> <p>Experience in creating, querying SQL-databases and creating BI reports using SQL Reporting Services  </p></div>
    <div className="box"><h3><FcSelfServiceKiosk /> <br></br>APIs</h3> <p>Experience in creating and consuming .NET APIs </p></div>
    <div className="box"><h3><FcVoicePresentation /> <br></br>Development life cycle </h3> <p>Experience in analysing, defining requirements, designing and developing from idea to working product </p></div>
    <div className="box"><h3><FcTimeline /> <br></br>CI/CD</h3> <p>Experience with Azure Devops/Pipelines, IIS,TFVC,GIT and Octopus Deploy </p></div>
    <div className="box"><h3><FcTemplate /> <br></br>React</h3> <p>Experience in creating smaller inhouse application with React + .NET APIs </p></div>
 
  </div>
    </Fade>
 
  </div>
}

export default Skills;
