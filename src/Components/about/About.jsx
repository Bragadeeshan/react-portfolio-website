import React from 'react'
import './about.css'
import ME from '../../assets/about-me.jpg'
import {BsAward} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import{RiFolderChartFill} from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
   
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About_Image" />
        </div>
      </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Dev-Ops Intern - Arimac</small> <br />
              <small>Software Support Engineer - Spades </small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon'/>
              <h5>Education</h5>
              <small>University of Peradeniya</small><br />
              <small>Faculty of Engineering</small><br />
              <small>BSc. in Computer Engineering</small>
            </article>

            <article className='about__card'>
              <RiFolderChartFill className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ completed Projects </small>
            </article>
            

          
        </div>
        <p>
            An Ambitious Computer engineering undergraduate who is in a way
of becoming a future leader and a hard-working and dedicated
student.Extremely motivated to constantly develop my skills and grow
professionally. I am confident in my ability to come up with
interesting answers to the problems laid in front of me
            </p>

            <a href="#contact" className='btn btn-primary'> Let's Talk</a>
      </div>


      </div>

    </section>
  )
}

export default About