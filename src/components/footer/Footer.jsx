import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ROFAYDA</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experinece'>Experience</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

    </footer>
  )
}
