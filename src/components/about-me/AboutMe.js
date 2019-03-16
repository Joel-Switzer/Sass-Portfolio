import React, { Component } from 'react'
import './AboutMe.scss'

// Images & icons
import Portrait from '../../images/me.jpg'

export class AboutMe extends Component {
  render() {
    return (
      <div className='about overlay-wrapper'>
        <div className='header'>
          <img className='portrait' src={Portrait} alt='Joel Switzer' />
          <div><h2>About me</h2></div>
        </div>
        <div className='content'>
          <div className='education'>
          
          </div>
          <div className='skills'>
          
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe
