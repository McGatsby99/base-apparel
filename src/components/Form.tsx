import React from 'react'
import arrowIcon from '../images/icon-arrow.svg'

interface Props {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC <Props> = ({ email, setEmail }) => {
  return (
    <form className='inputForm m-1' action="">
        <label htmlFor="email">
            <input 
              id='email' 
              type="email" 
              value={email}
              onChange={(e) => e.target.value}
              placeholder='Email Address' />
        </label>
        <button type='submit'>
          <img src={arrowIcon} alt=""  width={10}/>
        </button>
    </form>
  )
}

export default Form