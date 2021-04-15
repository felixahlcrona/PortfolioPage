import React, { useState } from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// @ts-ignore
import Zoom, { Fade } from 'react-reveal';
import './App.css';
import Skills from './Skills';
import Projects from './Projects';

const App: React.FC = () => {

  return <div className="container">

    <Router>
      <div className="parent">
        <div className="section" >
          <Link to="/login" style={{ textDecoration: 'none' }} className="linkText"><h3>Summary</h3></Link>
          <Link to="/projects"style={{ textDecoration: 'none' }} className="linkText"><h3>Projects</h3></Link>
        </div>

        <div className="section" >
          <Switch>
            <Route path="/login">
              <Skills />
            </Route>
            <Route path="/projects">
              <Projects />
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
