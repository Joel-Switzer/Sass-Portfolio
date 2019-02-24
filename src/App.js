import React, { Component } from 'react'
// import { BrowserRouter, Route, Link } from 'react-router-dom'
import { animateScroll as Scroll } from 'react-scroll'
import HeaderNav from './components/header-nav/HeaderNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSection: 0
    }
  }

  // Smooth scroll between sections
  handleScroll = (e) => {
    const incriment = document.documentElement.clientHeight
    const current = this.state.currentSection
    let temp = current

    if (e.deltaY < 0) {
      // Scroll up'
      temp -= incriment
      if (temp < 0) {
        temp = 0;
      }
      Scroll.scrollTo(temp)
      this.setState({
        currentSection: temp
      })
    }
    else if (e.deltaY > 0 || e.target.value === 'down') {
      // Scroll down
      temp += incriment;
      if (temp > incriment * 3) {
        temp = incriment * 3
      }
      Scroll.scrollTo(temp)
      this.setState({
        currentSection: temp 
      })
    }
    // Change hamburger to black on light backgrounds
    const menuBars = document.querySelectorAll('.btn-menu .bar'),
      home = 0, 
      aboutMe = incriment * 1, 
      portfolio = incriment * 2, 
      contact = incriment * 3

    if (temp === portfolio || temp === aboutMe) {
      menuBars.forEach(item => item.classList.add('dark'))
    } else if (temp === home || temp === contact) {
      menuBars.forEach(item => item.classList.remove('dark'))
    }
  }
  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll, {passive: true});
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }
  scrollListener = React.createRef(); 


  render() {
    return (
      <div className="App" ref={this.scrollListener}>
        <header>
          <HeaderNav />
        </header>
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
        
        </section>
        <section id='my-portfolio'>
        
        </section>
        <section id='contact-me'>
        
        </section>
      </div>
    );
  }
}

export default App
