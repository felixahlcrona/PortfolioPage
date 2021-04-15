import React, { useState } from 'react';
import netlogo from './Images/netlogo.png';
import mlnetlogo from './Images/mlnetlogo.png';
import blazorlogo from './Images/blazorlogo.png';
import reactlogo from './Images/reactlogo.png';
import sqllogo from './Images/sqllogo.png';
import logo from './logo.svg';
// @ts-ignore
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
      <h3>.Net/C# utvecklare som sitter mycket med Microsoft stacken. Med störst fokus på Inhouse enterprise applikationer av alla möjliga slag. Utvecklat från grunden fastighetssystem, ärendehanteringssystem, grafiskt skyltprogram, web crawlers etc.
      Det mesta projekten var byggda i .NET Framework/Core med MVC och på senare tid mycket Blazor serverside. Har även suttit i en del React projekt men inte i lika stor utsträckning som .NET.
      Många av projekten drev jag från idé till slutprodukt vilket medförde varierande arbetsuppgifter med allt från kravinsamling, design, projektledning, implementering och utveckling. Sitter oftast med hela scopet i ett projekt från gränssnitt till databas.
      Utöver webbapplikationer har jag även tagit fram ett par spännande Machine learning genom ML.NET samt gjort BI rapporter i SSRS och tagit del utav mindre integrationsjobb.</h3>
    </Zoom>
  </div>
}

export default Skills;
