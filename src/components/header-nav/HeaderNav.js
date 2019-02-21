import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class HeaderNav extends Component {
  render() {
    return (

      <nav className='header-nav'>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>My Portfolio</li>
          <li>Contact Me</li>
        </ul>
        <div className='btn-menu'>
          <div className='menu-bar'></div>
          <div className='menu-bar'></div>
          <div className='menu-bar'></div>
        </div>
      </nav>
    )
  }
}

export default HeaderNav
