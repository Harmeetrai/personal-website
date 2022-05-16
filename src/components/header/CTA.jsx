import React from 'react'
import CV from '../../assests/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
        <a href="https://portfolio.harmeetrai.me/" className='btn'>Coding Portfolio</a>
    </div>
  )
}

export default CTA