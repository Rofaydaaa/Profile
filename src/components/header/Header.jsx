import React from 'react'
import './header.css'
import { CTA } from './CTA'
import ME from '../../assets/me.png'
import { HeaderSocial } from './HeaderSocial'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Rofayda</h1>
        <h3 className="text-light">Computer Engineering Student</h3>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    
    </header>
  )
}
