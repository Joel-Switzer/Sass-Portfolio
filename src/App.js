import React, { Component } from 'react'
import { animateScroll as Scroll } from 'react-scroll'
import Swipe from 'react-easy-swipe'
import './App.scss'

// Site components & sections
import HeaderNav from './components/header-nav/HeaderNav'
import SideNav from './components/side-nav/SideNav'
import Home from './components/home-page/HomePage'
import AboutMe from './components/about-me/AboutMe'
import Portfolio from './components/portfolio/Portfolio'
import ContactMe from './components/contact-me/ContactMe'

class App extends Component {
  constructor(props) {
    super(props)
    const i = document.documentElement.clientHeight, 
      pageInfo = {
        incriment: i,
        home: 0, 
        about: i * 1,
        portfolio: i * 2,
        contact: i * 3
      }

    this.state = {
      current: 0,
      pages: pageInfo,
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
    const i = this.state.pages.incriment
    let current = this.state.current

    // Set scroll direction
    if (e.deltaY < 0 || e === 'up') {
      current -= i
      if (current < 0) {
        current = 0
      }
    }
    else if (e.deltaY > 0 || e === 'down' || e.target.value === 'down') {
      current += i
      if (current > i * 3) {
        current = i * 3
      }
    }

    // Scroll to section. Debounce was implemented to reduce scroll sensitivity
    this.debounce(current)
  }

  // Debounce function for scroll events
  debounce = (target) => {
    let delay = this.state.scrollDelay
    let temp

    // Clear unexecuted events
    if (temp) {
      clearTimeout(temp) 
    }

    // Scroll to section after delay
    temp = setTimeout(() => {
      Scroll.scrollTo(target)
      this.setState({
        current: target
      })
      temp = null
    }, delay)
  }

  // Handle swipe events on mobile
  swipeDown = () => {
    this.handleScroll('up')
  }
  swipeUp = () => {
    this.handleScroll('down')
  }
  
  render() {
    const pages = Object.assign({}, this.state.pages),
      current = this.state.current

    return (
      <div className="App">
        <header>
          <HeaderNav current={current} debounce={this.debounce} />
        </header>

        <SideNav current={current} pages={pages} debounce={this.debounce} />

        <Swipe onSwipeDown={this.swipeDown} onSwipeUp={this.swipeUp}>
          <section id='home-main'>
            <Home scroll={this.handleScroll} />
          </section>
          
          <section id='about-me'>
            <AboutMe />
          </section>

          <section id='my-portfolio'>
            <Portfolio />
          </section>

          <section id='contact-me'>
            <ContactMe />
          </section>
        </Swipe>
      </div>
    );
  }
}

export default App
