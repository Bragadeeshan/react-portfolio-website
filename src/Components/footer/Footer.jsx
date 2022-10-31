import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="# " className='footer__logo'> BRAGADEESHAN </a>
      <ul className='permalinks'>
        <li><a href="# "> Home</a></li>
        <li><a href="#about"> About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services"> Skills & Interests</a></li>
        <li><a href="#portfolio"> Portfolio</a></li>
        <li><a href="#testimonials"> References</a></li>
        <li><a href="#contact"> Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/Deesh.Waran"> <AiFillFacebook/></a>
        <a href="https://instagram.com/dee_s_h"><AiFillInstagram/></a>
        <a href="https://twitter.com/bragadeeshan"><AiFillTwitterSquare/> </a>
      </div>

      <div className="footer__copyright">
       <small>&copy; All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer