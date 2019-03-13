import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Portrait from '../../images/me.jpg'
import './SiteNav.scss'

export class SiteNav extends Component {

  componentDidUpdate() {
    const { home, about, portfolio, contact } = this.props.pages,
      menuBars = document.querySelectorAll('.btn-menu .bar, .side-nav div'),
      menuItems = document.querySelectorAll('.nav-menu li div, .side-nav div'),
      current = this.props.current

    // Change menu color on portfolio section
    if (current === portfolio) {
      menuBars.forEach(item => item.classList.add('dark'))
    } else {
      menuBars.forEach(item => item.classList.remove('dark'))
    }

    // Switch active class to correct link
    menuItems.forEach(item => item.classList.remove('active'))
    switch (current) {
      case home:
        document.querySelectorAll('#link-home').forEach(item => item.classList.add('active'))
        break
      case about:
        document.querySelectorAll('#link-about').forEach(item => item.classList.add('active'))
        break
      case portfolio:
        document.querySelectorAll('#link-portfolio').forEach(item => item.classList.add('active'))
        break
      case contact:
        document.querySelectorAll('#link-contact').forEach(item => item.classList.add('active'))
        break
      default: 
        break
    }
  }

  // Toggle the hamburger menu
  toggleMenu = () => {
    document.querySelector('.btn-menu').classList.toggle('close')
    document.querySelectorAll('.menu-overlay, .branding, .nav-menu, .nav-menu li').forEach(item => item.classList.toggle('show'))
    document.querySelectorAll('.side-nav div').forEach(item => item.classList.toggle('menu')) // Side nav color
  }

  // Handle clicking nav buttons & links
  handleClick = (e) => {
    const { home, about, portfolio, contact } = this.props.pages // Destructure page object
    let id = e.target.id
    switch(true) {
      case id==='link-home':
        this.props.debounce(home)
        break
      case id==='link-about':
        this.props.debounce(about)
        break
      case id==='link-portfolio':
        this.props.debounce(portfolio)
        break
      case id==='link-contact':
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
              <li><div id='link-home' onClick={this.handleClick} className='active'>Home</div></li>
              <li><div id='link-about' onClick={this.handleClick}>About Me</div></li>
              <li><div id='link-portfolio' onClick={this.handleClick}>My Portfolio</div></li>
              <li><div id='link-contact' onClick={this.handleClick}>Contact Me</div></li>
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
