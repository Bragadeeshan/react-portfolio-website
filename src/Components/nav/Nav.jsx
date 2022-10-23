import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {GrServices} from 'react-icons/gr'
import {AiTwotonePhone} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import { useState } from 'react'

const nav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeNav, setActiveNav] = useState('# ')
  return (
    <nav>
      <a href="# " onClick={() => setActiveNav('# ')} className = {activeNav === '# '? 'active' : ''}> <AiOutlineHome/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about'? 'active' : ''}><FaUserCircle/></a>
      <a href="#experience" onClick={() => setActiveNav('#experince')} className = {activeNav === '#experince'? 'active' : ''}><BsBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className = {activeNav === '#services'? 'active' : ''}><GrServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#Contact')} className = {activeNav === '#Contact'? 'active' : ''}><AiTwotonePhone/></a>
     
    </nav>
  )
}

export default nav