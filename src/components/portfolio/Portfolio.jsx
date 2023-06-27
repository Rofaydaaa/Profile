import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png'
import IMG2 from '../../assets/IMG2.png'
import IMG3 from '../../assets/IMG3.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Search Engine',
    github: 'https://github.com/Rofaydaaa/Search-Engine'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Deploying Hebtus Web App',
    github: 'https://github.com/Hebtus'
  },
  {
    id: 3,
    image: IMG3,
    title: '6 Stages Pipelined Processor',
    github: 'https://github.com/Rofaydaaa/6-stage-pipelined-processor-Harvard'
  }
]
export const Portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Projects</h2>

       <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
              </div>
            </article>
            )
          })
        }
       </div>
    </section>
  )
}
