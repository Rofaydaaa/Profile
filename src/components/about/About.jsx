import React from 'react'
import './about.css'
import ME from '../../assets/me2.png'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src ={ME} alt='About Image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              {/* add icon */}
              <h5>Currently an Intern</h5>
              <small>@ SilverKey technologies</small>
            </article>

            <article className='about__card'>
              {/* add icon */}
              <h5>Hobbies</h5>
              <ul>
                <li><small>- Teaching and Leading</small></li>
                <li><small>- Hiking</small></li>
                <li><small>- Problem solving and puzzles</small></li>
                <li><small>- Having a deep discussion with individuals</small></li>
              </ul>
              </article>

            <article className='about__card'>
              {/* add icon */}
              <h5>Wishing to</h5>
              <ul>
                <li><small>- Start my blog </small></li>
                <li><small>- Start a part time job before graduating</small></li>
                <li><small>- Improve some of my skills and acquire new ones</small></li>
                <li><small>- More Adventure</small></li>
              </ul>
            </article>
          </div>

          <p>
          When it comes to describing myself, I am incredibly passionate 
          about the software engineering field. I have a strong desire to continuously learn and explore new technologies.
          <br />
          I love sharing knowldge with others and I'm looking forward to start my writing blogs.
          <br />
          <br />
          <h3>You can find me anywhere, either catching sunsets &#127749; or catching my code bugs &#x1F41B;.</h3> 
          </p>

          {/* <a href='#contact' className='btn btn-primary'>Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}
