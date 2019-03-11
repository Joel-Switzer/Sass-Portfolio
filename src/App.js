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
      currentSection: 0
    }
  }
  
  // Scroll listener
  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll, {passive: true})
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll)
  }

  // Event handler
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

    // Update hamburger menu color
    this.updateMenu(current, incriment)
  }

  // Debounce scroll event
  debounce = (current) => {
    let delay = 100
    let temp

    // Clear unexecuted scroll events
    if (temp) {
      clearTimeout(temp) 
    }

    // Scroll to section after 250ms
    temp = setTimeout(() => {
      Scroll.scrollTo(current)
      this.setState({
        currentSection: current
      })
      temp = null
    }, delay)
  }

  // Update hamburger menu color depending on section
  updateMenu = (current, incriment) => {
    const menuBars = document.querySelectorAll('.btn-menu .bar')
    const portfolio = incriment * 2

    if (current === portfolio) {
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
          <HeaderNav current={this.state.currentSection} />
        </header>

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

            <br />

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
