import React from 'react'
import CV_Bragadeeshan_S from '../../assets/CV_Bragadeeshan_S.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_Bragadeeshan_S} download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA