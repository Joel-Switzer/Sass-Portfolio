import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HeaderNav from './components/header-nav/HeaderNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          {/* <HeaderNav /> */}
        </header>
        <div className='home-main'>
          <h1 className='main-header'><span className='highlight'>Joel</span> Switzer</h1>
          <h2 className='sub-header'><span>Web Developer, Programmer, Fast Learner</span></h2>
        
          <div className='icons'>
            <a href='#!' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size='4x' />
            </a>
            <a href='#!' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size='4x' />
            </a>
            <a href='#!' target='_blank' rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size='4x' />
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default App
