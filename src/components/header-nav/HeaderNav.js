import React, { Component } from 'react'
import { Link } from 'react-scroll'
import PropTypes from 'prop-types'
import Portrait from '../../images/me.jpg'
import './HeaderNav.scss'


export class HeaderNav extends Component {
  componentDidUpdate() {
    // Change menu color on portfolio section
    const menuBars = document.querySelectorAll('.btn-menu .bar')
    if (this.props.current === document.documentElement.clientHeight * 2) {
      menuBars.forEach(item => item.classList.add('dark'))
    } else {
      menuBars.forEach(item => item.classList.remove('dark'))
    }
  }

  // Toggle the hamburger menu
  toggleMenu = () => {
    document.querySelector('.btn-menu').classList.toggle('close')
    document.querySelector('.menu-overlay').classList.toggle('show')
    document.querySelector('.branding').classList.toggle('show')
    document.querySelector('.nav-menu').classList.toggle('show')
    document.querySelectorAll('.nav-menu li').forEach(item => item.classList.toggle('show'))
  }

  render() {
    return (
      <div>
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
              <li id='home-link'>
                <Link to='home-main'
                  activeClass='active-link'
                  spy={true}
                  smooth={true}
                  duration={500}> Home </Link>
              </li>
              <li id='about-link'>
                <Link to='about-me' 
                  activeClass='active-link'
                  spy={true}
                  smooth={true}
                  duration={500}> About Me </Link>
              </li>
              <li id='portfolio-link'>
                <Link to='my-portfolio'
                  activeClass='active-link'
                  spy={true}
                  smooth={true}
                  duration={500}> Portfolio </Link>
              </li>
              <li id='contact-link'>
                <Link to='contact-me'
                  activeClass='active-link'
                  spy={true}
                  smooth={true}
                  duration={500}> Contact Me </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

// Ensure proptypes are required
HeaderNav.propTypes = {
  current: PropTypes.number.isRequired,
  debounce: PropTypes.func.isRequired
}

export default HeaderNav
