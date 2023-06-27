import React from 'react'
import './services.css'
import { AiFillCheckCircle } from 'react-icons/ai'

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I did?</h5>
      <h2>Volunteering and Working Experience</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Professional Experience</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <h4>Machine Learning internship in ONE LAB</h4>
              <p><small>Working with Digital design team to build ML models for Melanoma skin cancer
                detection on the target FPGA.</small></p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <h4>SWE intern at Iskraemeco by ElSewedy Electric</h4>
              <p><small>Working on Web applications that use .NET Web API & Entity Framework Core.</small></p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <h4>Part time Robotics Trainer at STEM club</h4>
              <p><small>Offering young kids, the opportunity to discover their passion for science and
                technology in robotics training camps.</small></p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Volunteering</h3>
          </div>
          <ul className='service__list'>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <h4>Cairo University Racing Team</h4>
              <p><small>Responsible of developing algorithms to calculate the optimal path with
                minimum lap time.</small></p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <h4>C++ and OOP workshop Head in Energia Powered</h4>
              <p><small> I took on the responsibility of conducting member interviews, 
                delivering instructor training, coordinating the selection of the final project for participants, 
                and overseeing their overall performance, focusing on a text-based Battle game as the culminating project.</small></p>
            </li>
            <li>
              <AiFillCheckCircle className='service__list-icon'/>
              <h4>Arduino workshop Instructor</h4>
              <p><small>Volunteered in preparing sessions' slides and tasks, interviewing participants, <br />Final project: smart home system.</small></p>
            </li>
          </ul>
        </article>

      </div> 
    </section>  
  )
}
