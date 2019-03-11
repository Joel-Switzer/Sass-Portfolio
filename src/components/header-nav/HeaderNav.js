import React, { Component } from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import Portrait from '../../images/me.jpg'
import './HeaderNav.scss'


export class HeaderNav extends Component {

  // Toggle the menu
  toggleMenu = () => {
    document.querySelector('.btn-menu').classList.toggle('close')
    document.querySelector('.menu-overlay').classList.toggle('show')
    document.querySelector('.branding').classList.toggle('show')
    document.querySelector('.nav-menu').classList.toggle('show')
    document.querySelectorAll('.nav-menu li').forEach(item => item.classList.toggle('show'))
  }

  render() {
    return (
      <nav className='header-nav'>
        <div className='btn-menu' onClick={this.toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div className='menu-overlay'>
          <div className='branding'>
            <img src={Portrait} className='portrait' alt='portrait'/>
          </div>
          <ul className='nav-menu'>
            <li>
              <Link to='home-main' 
                activeClass='active-link'
                spy={true}
                smooth={true}
                duration={500}> Home </Link>
            </li>
            <li >
              <Link to='about-me' 
                activeClass='active-link'
                spy={true}
                smooth={true}
                duration={500}> About Me </Link>
            </li>
            <li>
              <Link to='my-portfolio' 
                activeClass='active-link'
                spy={true}
                smooth={true}
                duration={500}> Portfolio </Link>
            </li>
            <li>
              <Link to='contact-me' 
                activeClass='active-link'
                spy={true}
                smooth={true}
                duration={500}> Contact Me </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

// Ensure proptypes are required
HeaderNav.propTypes = {
  current: PropTypes.number.isRequired
}

export default HeaderNav
