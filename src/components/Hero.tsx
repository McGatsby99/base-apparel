import React from 'react'
import heroMobile from '../images/hero-mobile.jpg'
import heroDesktop from '../images/hero-desktop.jpg'


const Hero: React.FC = () => {
  return (
    <div className='hero'>
        <picture >
            <source className='responsive' media="(min-width:375px)" srcSet={heroDesktop}/>
            <img className='responsive' srcSet={heroMobile} alt="" />
        </picture>
    </div>
  )
}

export default Hero