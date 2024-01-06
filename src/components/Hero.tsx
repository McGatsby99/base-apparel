import React from 'react'
import heroMobile from '../images/hero-mobile.jpg'
import heroDesktop from '../images/hero-desktop.jpg'


const Hero: React.FC = () => {
  return (
    <div className='hero'>
        <picture >
            <source media="(min-width:380px)" srcSet={heroDesktop}/>
            <img srcSet={heroMobile} alt="" />
        </picture>
    </div>
  )
}

export default Hero