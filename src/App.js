import React, { Component } from 'react'
import { animateScroll as Scroll } from 'react-scroll'
import Swipe from 'react-easy-swipe'
import './App.scss'

// Site sections & components
import HeaderNav from './components/header-nav/HeaderNav'
import AboutMe from './components/about-me/AboutMe'
import Portfolio from './components/portfolio/Portfolio'

// Images & icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSection: 0,
      scrollDelay: 100
    }
  }
  
  // Scroll listener
  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll, {passive: true})
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll)
  }

  // Scroll handler
  handleScroll = (e) => {
    const incriment = document.documentElement.clientHeight
    let current = this.state.currentSection

    // Set scroll direction
    if (e.deltaY < 0 || e === 'up') {
      current -= incriment
      if (current < 0) {
        current = 0
      }
    }
    else if (e.deltaY > 0 || e === 'down' || e.target.value === 'down') {
      current += incriment
      if (current > incriment * 3) {
        current = incriment * 3
      }
    }

    // Scroll to section. Debounce was implemented to reduce scroll sensitivity
    this.debounce(current)

    // Update menu to reflect scroll
    this.updateMenu(current, incriment)
  }

  // Debounce for scroll events
  debounce = (current) => {
    let delay = this.state.scrollDelay
    let temp

    // Clear unexecuted events
    if (temp) {
      clearTimeout(temp) 
    }

    // Scroll to section after delay
    temp = setTimeout(() => {
      Scroll.scrollTo(current)
      this.setState({
        currentSection: current
      })
      temp = null
    }, delay)
  }

  // Update side nav and hamburger menu when scrolled
  updateMenu = (current, incriment) => {
    const menuBars = document.querySelectorAll('.btn-menu .bar')
    const sideNav = document.querySelectorAll('.side-nav div')
    let temp = null;
    const home = 0, 
      about = incriment * 1,
      portfolio = incriment * 2,
      contact = incriment * 3

    // Switch active class to correct link
    sideNav.forEach(item => item.classList.remove('active'))
    switch (current) {
      case home:
        temp = document.querySelector('#link-home')
        temp.classList.add('active')
        break
      case about:
        temp = document.querySelector('#link-about')
        temp.classList.add('active')
        break
      case portfolio:
        temp = document.querySelector('#link-portfolio')
        temp.classList.add('active')
        break
      case contact:
        temp = document.querySelector('.side-nav #link-contact')
        temp.classList.add('active')
        break
      default: 
        break
    }
    
    // Set menu colors for section
    if (current === portfolio) {
      menuBars.forEach(item => item.classList.add('dark'))
      sideNav.forEach(item => item.classList.add('dark'))
    } else {
      menuBars.forEach(item => item.classList.remove('dark'))
      sideNav.forEach(item => item.classList.remove('dark'))
    }
  }

  // Handle swipe events on mobile
  swipeDown = () => {
    this.handleScroll('up')
  }
  swipeUp = () => {
    this.handleScroll('down')
  }
  // Handle clicking side nav buttons
  handleSideNav = (e) => {
    const i = document.documentElement.clientHeight,
      home = 0, 
      about = i * 1,
      portfolio = i * 2,
      contact = i * 3
      
    switch(e.target.id) {
      case 'link-home':
        this.debounce(home)
        this.updateMenu(home, i)
        break
      case 'link-about':
        this.debounce(about)
        this.updateMenu(about, i)
        break
      case 'link-portfolio':
        this.debounce(portfolio)
        this.updateMenu(portfolio, i)
        break
      case 'link-contact':
        this.debounce(contact)
        this.updateMenu(contact, i)
        break
      default:
        break
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <HeaderNav current={this.state.currentSection} />
        </header>
        <nav className='side-nav'>
          <div id='link-home' className='active' onClick={this.handleSideNav}></div>
          <div id='link-about' onClick={this.handleSideNav}></div>
          <div id='link-portfolio' onClick={this.handleSideNav}></div>
          <div id='link-contact' onClick={this.handleSideNav}></div>
        </nav>

        <Swipe allowMouseEvents={true}
          onSwipeDown={this.swipeDown} 
          onSwipeUp={this.swipeUp}>
          <section id='home-main'>
            <h1 className='main-header'><span className='highlight'>Joel</span> Switzer</h1>
            <h2 className='sub-header'><span>Web Developer, Professional Learner</span></h2>
          
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
              <button className='swipe-down' onClick={this.handleScroll} value='down'></button>
            </div>
          </section>
          
          <section id='about-me'>
            <AboutMe />
          </section>

          <section id='my-portfolio'>
            <Portfolio />
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
