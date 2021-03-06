import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './HomePage.scss'

// Fontawesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export class HomePage extends Component {
  render() {
    return (
      <div className='home-main overlay-wrapper'>
        <div className='wrapper'>
          <h1 className='header'><span className='highlight'>Joel</span> Switzer</h1>
          <h2><span className='bg-lighten'>Web Developer, Professional Learner</span></h2>
        
          <div className='icons'>
            <a href='mailto: joelswitzer1@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} size='4x' />
            </a>
            <a href='http://www.linkedin.com/in/Joel-Switzer' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size='4x' />
            </a>
            <a href='https://github.com/Joel-Switzer' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size='4x' />
            </a>
          </div>

          <div className='scroll-button'>
            <p>Scroll down!</p>
            <button className='swipe-down' onClick={this.props.scroll} value='down'></button>
          </div>
        </div>
      </div>
    )
  }
}

// Ensure proptypes are required
HomePage.propTypes = {
  scroll: PropTypes.func.isRequired
}
export default HomePage
