import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Programming Language</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div> 
              <h4> Python </h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4> C </h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div> <h4> Go </h4>
              <small className='text-light'>Intermediete</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div> <h4> Java </h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4> Matlab </h4>
              <small className='text-light'>Intermediete</small>
              </div>
            </article>
            
          </div>
        </div>
       {/*===== End of programming Language =====*/}
        <div className="experience_backend">
        <h3>Web Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div> <h4> HTML </h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4> Django </h4>
              <small className='text-light'>Intermediete</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div> <h4> React </h4>
              <small className='text-light'>Intermediete</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
             <div> <h4> Node js </h4>
              <small className='text-light'>Intermediete</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div><h4> MongoDB </h4>
              <small className='text-light'>Intermediete</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience