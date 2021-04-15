import React from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// @ts-ignore
import Zoom, { Flip } from 'react-reveal';
import './App.css';
import Skills from './Skills';
import Projects from './Projects';

const App: React.FC = () => {

  return <div className="container">

    <Router>
      <div className="parent">
        <div className="section" >
        <Flip top>
          <h1>Felix Ahlcrona</h1>
        </Flip>
          <Link to="/summary" style={{ textDecoration: 'none' }} className="linkText"><h3>Overview</h3></Link>
          <Link to="/projects"style={{ textDecoration: 'none' }} className="linkText"><h3>Skillset</h3></Link>
        </div>

        <div className="section" >
       
          <Switch>
            <Route path="/summary">
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
