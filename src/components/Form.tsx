import React from 'react'
import arrowIcon from '../images/icon-arrow.svg'
import errorIcon from '../images/icon-error.svg'



// type Validity = boolean | null;
interface Props {
  email: string;
  valid: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void
}

const Form: React.FC <Props> = ({ email, setEmail, handleSubmit, valid }) => {
  return (
    <form className='inputForm m-1' onSubmit={handleSubmit} noValidate>
        <label htmlFor="email">
            <input 
              className={valid === true? '': 'input-error'}
              id='email' 
              type="email" 
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder='Email Address' />
        </label>
        <p id='error'>{valid ===true? '': 'Please provide a valid email'}</p>
        { valid === true?
          '':
        <img className='errorIcon' src={errorIcon} alt="errorIcon" width={20}/>
        }
        <button className={valid === true? '': 'btn-error'} type='submit'>
          <img src={arrowIcon} alt=""  width={10}/>
        </button>
    </form>
  )
}

export default Form