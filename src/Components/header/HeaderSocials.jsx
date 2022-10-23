import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/bragadeeshansuppusamy" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Bragadeeshan" target="_blank" rel="noreferrer"> <BsGithub/></a>
        <a href="https://dribble.com" target="_blank" rel="noreferrer"> <FaDribbbleSquare/></a>
    </div>
  )
}

export default HeaderSocials