import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Portrait from '../../images/me.jpg'
import './HeaderNav.scss'
import './SideNav.scss'


export class SiteNav extends Component {

  componentDidUpdate() {
    const { home, about, portfolio, contact } = this.props.pages,
      menuBars = document.querySelectorAll('.btn-menu .bar'),
      menuItems = document.querySelectorAll('.nav-menu li div'),
      sideNav = document.querySelectorAll('.side-nav div'),
      current = this.props.current

    // Change menu color on portfolio section
    if (current === portfolio) {
      menuBars.forEach(item => item.classList.add('dark'))
      sideNav.forEach(item => item.classList.add('dark'))
    } else {
      menuBars.forEach(item => item.classList.remove('dark'))
      sideNav.forEach(item => item.classList.remove('dark'))
    }

    // Switch active class to correct link
    menuItems.forEach(item => item.classList.remove('active-link'))
    sideNav.forEach(item => item.classList.remove('active'))
    switch (current) {
      case home:
        document.querySelector('#home-link').classList.add('active-link')
        document.querySelector('#link-home').classList.add('active')
        break
      case about:
        document.querySelector('#about-link').classList.add('active-link')
        document.querySelector('#link-about').classList.add('active')
        break
      case portfolio:
        document.querySelector('#portfolio-link').classList.add('active-link')
        document.querySelector('#link-portfolio').classList.add('active')
        break
      case contact:
        document.querySelector('#contact-link').classList.add('active-link')
        document.querySelector('#link-contact').classList.add('active')
        break
      default: 
        break
    }
  }

  // Toggle the hamburger menu
  toggleMenu = () => {
    document.querySelector('.btn-menu').classList.toggle('close')
    document.querySelector('.menu-overlay').classList.toggle('show')
    document.querySelector('.branding').classList.toggle('show')
    document.querySelector('.nav-menu').classList.toggle('show')
    document.querySelectorAll('.nav-menu li').forEach(item => item.classList.toggle('show'))
    document.querySelectorAll('.side-nav div').forEach(item => item.classList.toggle('menu')) // Side nav color
  }

  // Handle clicking side nav buttons
  handleClick = (e) => {
    const { home, about, portfolio, contact } = this.props.pages // Destructure page object
    document.querySelectorAll('.side-nav div').forEach(item => item.classList.remove('active'))
    
    let id = e.target.id
    switch(true) {
      case id==='link-home' || id==='home-link':
        this.props.debounce(home)
        break
      case id==='link-about' || id==='about-link':
        this.props.debounce(about)
        break
      case id==='link-portfolio' || id==='portfolio-link':
        this.props.debounce(portfolio)
        break
      case id==='link-contact' || id==='contact-link':
        this.props.debounce(contact)
        break
      default:
        break
    }
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
              <li>
                <div id='home-link' onClick={this.handleClick} className='active-link'>Home</div>
              </li>
              <li>
                <div id='about-link' onClick={this.handleClick}>About Me</div>
              </li>
              <li>
                <div id='portfolio-link' onClick={this.handleClick}>My Portfolio</div>
              </li>
              <li>
                <div id='contact-link' onClick={this.handleClick}>Contact Me</div>
              </li>
            </ul>
          </div>
        </nav>

        <nav className='side-nav'>
          <div id='link-home' className='active' onClick={this.handleClick}></div>
          <div id='link-about' onClick={this.handleClick}></div>
          <div id='link-portfolio' onClick={this.handleClick}></div>
          <div id='link-contact' onClick={this.handleClick}></div>
        </nav>
      </div>
    )
  }
}

// Ensure proptypes are required
SiteNav.propTypes = {
  current: PropTypes.number.isRequired,
  pages: PropTypes.object.isRequired,
  debounce: PropTypes.func.isRequired
}

export default SiteNav
