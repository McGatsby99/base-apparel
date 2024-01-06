import React from 'react';
import './App.css';
import logo from './images/logo.svg'

// components
import Hero from './components/Hero';
import Content from './components/Content';
import Form from './components/Form';


const App: React.FC = () =>
 {
  return (
    <div className="App container">
      <header className='logo m-1'>
        <img src={logo} alt="" width={100}/>
      </header>
      <Hero />
      <Content />
      <Form/>
    </div>
  );
}

export default App;
