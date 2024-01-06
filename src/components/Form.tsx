import React from 'react'
import arrowIcon from '../images/icon-arrow.svg'

const Form: React.FC = () => {
  return (
    <form className='inputForm m-1' action="">
        <label htmlFor="email">
            <input id='email' type="email" placeholder='Email Address' />
        </label>
        <button type='submit'>
          <img src={arrowIcon} alt=""  width={10}/>
        </button>
    </form>
  )
}

export default Form