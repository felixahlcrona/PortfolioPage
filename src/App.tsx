import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () =>{

  const [showText, setShowText] = useState(false);

  return <div className="parent">

    <div className="section" >
      <h1>Hello</h1>
    </div>

  </div>
    

}

export default App;
