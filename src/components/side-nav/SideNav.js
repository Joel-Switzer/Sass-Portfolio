import React, { Component } from 'react'
import './SideNav.scss'

export class SideNav extends Component {
  
  render() {
    return (
      <nav className='side-nav'>
        <div id='link-home' className='active' onClick={this.props.handleSideNav}></div>
        <div id='link-about' onClick={this.props.handleSideNav}></div>
        <div id='link-portfolio' onClick={this.props.handleSideNav}></div>
        <div id='link-contact' onClick={this.props.handleSideNav}></div>
      </nav>
    )
  }
}

export default SideNav
