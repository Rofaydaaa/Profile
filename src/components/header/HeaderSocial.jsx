import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'> <BsLinkedin size={40}/> </a>
        <a href="https://github.com" target='_blank'> <BsGithub size={40}/> </a>
    </div>
  )
}
