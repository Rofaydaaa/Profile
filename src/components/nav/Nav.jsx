import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiUserPin } from 'react-icons/bi'
import { AiOutlineExperiment } from 'react-icons/ai'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import { TbLamp2 } from 'react-icons/tb'
import { useState } from 'react'

export const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}
      > <AiOutlineHome /> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}
      > <BiUserPin /> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}
      > <AiOutlineExperiment /> </a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}
      > <RiServiceLine /> </a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}
      > <TbLamp2 /> </a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}
      > <BiMessageDetail /> </a>
    </nav>
  )
}
