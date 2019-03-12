import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SideNav.scss'

export class SideNav extends Component {


  // Update menu colors & active link on section change
  componentDidUpdate() {
    const sideNav = document.querySelectorAll('.side-nav div'),
      { home, about, portfolio, contact } = this.props.pages, // Destructure page object
      current = this.props.current

    // Change sidebar color for portfolio
    if (current === portfolio) {
      sideNav.forEach(item => item.classList.add('dark'))
    } else {
      sideNav.forEach(item => item.classList.remove('dark'))
    }
    
    // Switch active class to correct link
    sideNav.forEach(item => item.classList.remove('active'))
    switch (current) {
      case home:
        document.querySelector('#link-home').classList.add('active')
        break
      case about:
        document.querySelector('#link-about').classList.add('active')
        break
      case portfolio:
        document.querySelector('#link-portfolio').classList.add('active')
        break
      case contact:
        document.querySelector('#link-contact').classList.add('active')
        break
      default: 
        break
    }
  }

  // Handle clicking side nav buttons
  handleClick = (e) => {
    const pages = Object.assign({}, this.props.pages), 
      { home, about, portfolio, contact } = this.props.pages // Destructure page object
      
        
    document.querySelectorAll('.side-nav div').forEach(item => item.classList.remove('active'))
    switch(e.target.id) {
      case 'link-home':
        this.props.debounce(home, pages)
        break
      case 'link-about':
        this.props.debounce(about, pages)
        break
      case 'link-portfolio':
        this.props.debounce(portfolio, pages)
        break
      case 'link-contact':
        this.props.debounce(contact, pages)
        break
      default:
        break
    }
  }

  render() {
    return (
      <nav className='side-nav'>
        <div id='link-home' className='active' onClick={this.handleClick}></div>
        <div id='link-about' onClick={this.handleClick}></div>
        <div id='link-portfolio' onClick={this.handleClick}></div>
        <div id='link-contact' onClick={this.handleClick}></div>
      </nav>
    )
  }
}

// Ensure proptypes are required
SideNav.propTypes = {
  pages: PropTypes.object.isRequired,
  debounce: PropTypes.func.isRequired
}

export default SideNav
