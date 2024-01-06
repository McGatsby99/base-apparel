import React from 'react';
import './App.css';
import logo from './images/logo.svg'

// components
import Hero from './components/Hero';
import Content from './components/Content';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="" />
      </header>
      <Hero />
      <Content />
      <Form/>
    </div>
  );
}

export default App;
