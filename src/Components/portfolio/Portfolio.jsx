import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data=[
  {
    id:1,
    image:IMG1,
    title: 'DEEPLEARNING BASED SIDE CHANNEL ANALYSIS',
    github:'https://github.com',
    demo:'https://'
  },
  {
    id:2,
    image:IMG2,
    title: 'SMART VENDING MACHINE',
    github:'https://github.com/cepdnaclk/e16-3yp-smart-vending-machine',
    demo:'https://cepdnaclk.github.io/e16-3yp-smart-vending-machine/ProjectVideo_1.mp4'
  },
  {
    id:3,
    image:IMG3,
    title: 'FUZZY BASED RECOMMENDATION SYSTEM FOR FINALYEAR RESEARCH TOPIC SELECTION',
    github:'https://github.com',
    demo:'https://'
  },
  {
    id:4,
    image:IMG4,
    title: 'LIVER DISEASE PREDICTION WITH MACHINE LEARNING',
    github:'https://github.com',
    demo:'https://'
  },
  {
    id:5,
    image:IMG5,
    title: 'BIDDING SYSTEM',
    github:'https://github.com',
    demo:'https://'
  },
  {
    id:6,
    image:IMG6,
    title: '8-BIT SINGLE CYCLE CPU',
    github:'https://github.com/Bragadeeshan/8-bit-CPU',
    demo:'https://'
  },
]

const Portfolio = () => {
  return (
    <section id='#portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={image} alt={title} />
            </div>
              <h3> {title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='blank'>
                Live Demo
              </a>
              </div>
            
          </article>
          )
        })
       }
      </div>
      

    </section>
  )
}

export default Portfolio