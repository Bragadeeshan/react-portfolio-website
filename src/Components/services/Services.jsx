import React from 'react'
import './services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Services = () => {
  return (
    <section id='services'>
      <h5> What I Do</h5>
      <h2>Skills & Interests</h2>
      <div className="contatiner services__container">
        <article className='service'>
          <div className='service__head'>
          <h3>Technical Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Web Development</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Programming Languages</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>PCB Design</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>3D Modelling</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Content Creation</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Document Mangement</p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}
        <article className='service'>
          <div className='service__head'>
          <h3>Interests</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>IOT</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Cloud Computing</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Machine Learning</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>DevOps</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Video Editing And Production</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Digital Marketing</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        <article className='service'>
          <div className='service__head'>
          <h3>Personal Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Critical & Analitical Thinking</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Decision Making</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Project Mangment</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Team player</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Innovation</p>
            </li>
            <li>
              <AiOutlineCheckCircle className='service__list-icon'/>
              <p>Fast learner</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services