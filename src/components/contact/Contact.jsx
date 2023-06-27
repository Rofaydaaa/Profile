import React from 'react'
import './contact.css'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { BsDiscord } from 'react-icons/bs'

export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMailOpen className='contact__option-icon' />
            <h4>Email</h4>
            <h5>rofaydabasssem@gmail.com</h5>
            <a href='mailto:rofaydabasssem@gmail.com' target='_blank'>Send an Email</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+201277953660</h5>
            <a href='https://wa.me/201277953660' target='_blank'>Send a Message</a>
          </article>

          <article className='contact__option'>
            <BsDiscord className='contact__option-icon' />
            <h4>Discord</h4>
            <h5>Rofayda#3989</h5>
            <a href='https://discord.com/users/3989' target='_blank'>Send a Message</a>
          </article>
        </div>

        <form action=''>
          <input type='text' name='name' placeholder='Enter Your Full Name' required />
          <input type='email' name='email' placeholder='Enter Your Email' required />
          <input type='message' rows='7' placeholder='Enter Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}
