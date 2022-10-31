import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar:AVTR1,
    name:'Dr. Isuru Nawinne',
    position: 'Senior Lecturer',
    address: 'Dept. of Computer Engineering Univerisity of Peradeniya',
    email:'isurunawinne@eng.pdn.ac.lk',
    phoneNo:'+9481 239 3470'
  },
  {
    avatar:AVTR2,
    name:'Dr. Janaka Alawatugoda',
    position: 'Senior Lecturer',
    address: 'Dept. of Computer Engineering Univerisity of Peradeniya',
    email:'alawatugoda@eng.pdn.ac.lk',
    phoneNo:'+9481 239 3470'
  },
  {
    avatar:AVTR3,
    name:'Dr. Damayanthi Herath',
    position: 'Senior Lecturer',
    address: 'Dept. of Computer Engineering Univerisity of Peradeniya',
    email:'damayanthiherath@eng.pdn.ac.lk',
    phoneNo:'+9481 239 3920'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials' >
      <h5>Review From Clients</h5>
      <h2>References</h2>

      <Swiper className="container testimonial__container"  
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1} 
       pagination={{ clickable: true }}
       >
       {
        data.map(({avatar,name,position,address,email,phoneNo},index)=>{
          return(
            <SwiperSlide key={index} className='testimonial'>
            <div className="client__avatar">
              <img src={avatar} alt="Avatar 1" />
            </div>
            <h5 className='client__name'> {name}</h5>
            <small className='client__review'> {position}</small>
            <small className='client__review'> {address}</small>
            <small className='client__review'> {email}</small>
            <small className='client__review'> {phoneNo}</small>
          </SwiperSlide>

        )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials