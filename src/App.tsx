import React, { useState } from 'react';
import './App.css';
import logo from './images/logo.svg'

// components
import Hero from './components/Hero';
import Content from './components/Content';
import Form from './components/Form';
// import { isValid } from './scripts';


const App: React.FC = () =>
 {

  // type Validity = boolean ;

  const [email, setEmail] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValid(()=> {
        const formInput = document.getElementById("email") as HTMLInputElement;
        return !!formInput.value.length && formInput.validity.valid
    })
    console.log(valid)

    // const formInput = document.getElementById("email") as HTMLInputElement;

    // console.log(formInput.validity.valid)
    // if(!formInput.validity.valid){

    //   //error message
    //   const errorMsg = document.getElementById("error") as HTMLParagraphElement;
    //   console.log('error')
    //   errorMsg.innerHTML = 'Please provide a valid email'

    //   //button animation
    //   const btn = document.getElementById('btn') as HTMLButtonElement;
    //   btn.style.left = '140px'
    // }
  }


  return (
    <div className="App container">
      <header className='logo m-1'>
        <img src={logo} alt="" width={100}/>
      </header>
      <Hero />
      <Content />
      <Form 
        email={email} 
        setEmail={setEmail} 
        handleSubmit={handleSubmit} 
        valid= {valid}
        />
    </div>
  );
}

export default App;
