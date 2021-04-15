import React, { useState } from 'react';
import blazorlogo from './Images/blazorlogo.png';
import netlogo from './Images/netlogo.png';
import reactlogo from './Images/reactlogo.png';
import logo from './logo.svg';
// @ts-ignore
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// @ts-ignore
import Zoom, { Fade } from 'react-reveal';
import './App.css';
import Skills from './Skills';
import About from './About';

const App: React.FC = () => {

  const [showText, setShowText] = useState(false);

  return <div className="container">

    <Router>
      <div className="parent">
        <div className="section" >




          <Link to="/login"><h1>Home</h1></Link>
          <Link to="/about"><h1>Skills</h1></Link>




        </div>

        <div className="section" >
          <Switch>
            <Route path="/login">
              <Skills />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
          <Zoom>
        
          </Zoom>
       
        </div>
      </div>
    </Router>
  </div>


}

export default App;
