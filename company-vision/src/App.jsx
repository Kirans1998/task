import React from 'react';
import './App.css';
import Tab from './components/Tab';

const App = () => {
  return (
    <div className="App">
      <div className="left-panel">
        <h1>Our Company's <br /> <span>Vision  and <br/>
      
      Objectives</span></h1>
        <p>Unveiling Our Company's Core Objectives for Success</p>
      </div>
      <div className="right-panel">
        <Tab title="Hosted Content"  />
        <Tab title="International Clients" />
        <Tab title="Discussion" />
        <Tab title="Customer Success" />
        <Tab title="Self Learning" />
        <Tab title="Scoping & Discovery" />
      </div>
    </div>
  );
}

export default App;
