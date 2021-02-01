import React from 'react';
import logo from '../logo.svg';

const Page2 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">PAGE #2</h1>
      </header>
      <button onClick={() => onRouteChange('page1')}>page #1</button>
      <button className="disable">page #2</button>
      <button onClick={() => onRouteChange('page3')}>page #3</button>
    </div>
  );
};

export default Page2;
