import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

export const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/rofayda-bassem-03363b1a9" target='_blank'> <BsLinkedin size={40}/> </a>
        <a href="https://github.com/Rofaydaaa" target='_blank'> <BsGithub size={40}/> </a>
    </div>
  )
}
