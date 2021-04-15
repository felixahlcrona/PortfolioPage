import React, { useState } from 'react';
import netlogo from './Images/netlogo.png';
import mlnetlogo from './Images/mlnetlogo.png';
import blazorlogo from './Images/blazorlogo.png';
import reactlogo from './Images/reactlogo.png';
import sqllogo from './Images/sqllogo.png';
// @ts-ignore
import Zoom, { Fade } from 'react-reveal';
import './App.css';


const Skills: React.FC = () => {

  return <div className="container">
    <Fade top cascade>
      <div>
        <img src={netlogo} className="logos" />
        <img src={mlnetlogo} className="logos" />
        <img src={blazorlogo} className="logos" />
        <img src={sqllogo} className="logos" />
        <img src={reactlogo} className="logos" />
      </div>
    </Fade>

    <Zoom>
      <h3>.NET/C# developer who engaged mostly in the Microsoft stack. Primarily inhouse enterprise applications of all sorts.Built from the ground up real estate system, helpdesk system, graphical signs system, web crawlers, internal “prisjakt” comparing system, claims management system etc.  Also developed a couple of exciting Machine learning services with the help of ML.NET.

Most of the projects were built in the .NET Framework / Core and most recently Blazor. Usually sat with the whole development scope ranging from Blazor on the front end to .NET api and SQL server on the backend.  In addition to the enterprise development, I've made a few BI reports in SSRS and smaller integration jobs. I have some experience with React but no major.
The tasks were varied. The work included everything from requirements collection, implementation, and development.
</h3>
    </Zoom>

  </div>
}

export default Skills;
