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
      <p>
        Worked as a developer since 2018 and primarily focused on the development of internal applications with a focus on the Microsoft stack.
        Analytical and pragmatic person who is driven by creating effective solutions. "Soft" values comes natural for me and I make sure the clients need is aligned with the finished product. I Have a great interest in technology and curiosity about how things work.
    </p>
    </Zoom>


  </div>
}

export default Skills;
