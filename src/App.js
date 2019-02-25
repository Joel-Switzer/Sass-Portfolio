import React, { Component } from 'react'
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import { animateScroll as Scroll } from 'react-scroll'
import Swipe from 'react-easy-swipe'
import HeaderNav from './components/header-nav/HeaderNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Portrait from './images/avatar.png'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSection: 0
    }
  }
  
  // Scroll listener
  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll, {passive: true});
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }

  // Smooth scroll between sections
  handleScroll = (e) => {
    const incriment = document.documentElement.clientHeight
    const current = this.state.currentSection
    let temp = current

    // Set scroll direction
    if (e.deltaY < 0 || e === 'up') {
      temp -= incriment
      if (temp < 0) {
        temp = 0;
      }
    }
    else if (e.deltaY > 0 || e === 'down' || e.target.value === 'down') {
      temp += incriment;
      if (temp > incriment * 3) {
        temp = incriment * 3
      }
    }

    // Scroll to target section
    Scroll.scrollTo(temp)
    this.setState({
      currentSection: temp 
    })

    // Change hamburger menu to black on light backgrounds
    const menuBars = document.querySelectorAll('.btn-menu .bar')
    const portfolio = incriment * 2

    if (temp === portfolio) {
      menuBars.forEach(item => item.classList.add('dark'))
    } else {
      menuBars.forEach(item => item.classList.remove('dark'))
    }
  }

  // Handle swipe events on mobile
  swipeDown = () => {
    this.handleScroll('up')
  }
  swipeUp = () => {
    this.handleScroll('down')
  }


  render() {
    return (
      <div className="App">
        <header>
          <HeaderNav />
        </header>
        <Swipe onSwipeDown={this.swipeDown} onSwipeUp={this.swipeUp}>
          <section id='home-main'>
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

            <button onClick={this.handleScroll} value='down'>click me</button>

          </section>
          <section id='about-me'>
            <div className='overlay-wrapper'>
              <img id='about-me-portrait' src={Portrait} alt='A picture of me' />
            </div>
          </section>
          <section id='my-portfolio'>
          
          </section>
          <section id='contact-me'>
            <div className='overlay-wrapper'>
            
            </div>
          </section>
        </Swipe>
      </div>
    );
  }
}

export default App
