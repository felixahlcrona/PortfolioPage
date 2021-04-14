import React, { useState } from 'react';
import logo from './logo.svg';
// @ts-ignore
import Zoom from 'react-reveal/Zoom';
import './App.css';

const App: React.FC = () =>{

  const [showText, setShowText] = useState(false);

  return <div className="parent">
  <Zoom>
    <div className="section" >
      <h1>Hello</h1>
    </div>
    </Zoom>


  </div>
    

}

export default App;
