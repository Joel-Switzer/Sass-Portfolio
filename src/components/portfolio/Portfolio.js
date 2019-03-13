import React, { Component } from 'react'
import Project from './project-tile/Project'
import Demo from './demo/Demo'
import './Portfolio.scss'

// Project demos
import TodoListApp from './projects/TodoListApp/TodoListApp'
import CalculatorApp from './projects/CalculatorApp/CalculatorApp'

// Project preview images
import PreviewTodo from './images/todo-preview.png'
import PreviewCalc from './images/calculator-preview.png'
import PreviewFirstPortfolio from './images/first-portfolio-preview.png'

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      demo: '',
      showDemo: false,
      projects: [
        {
          id: 3,
          name: 'My First Portfolio',
          component: 'https://joel-switzer.github.io/My-First-Portfolio/',
          imgSrc: PreviewFirstPortfolio,
          github: 'https://github.com/Joel-Switzer/My-First-Portfolio',
          skills: [
            'React.JS',
            'Responsive CSS',
            'HTML5',
            'React-scroll'
          ]
        },
        {
          id: 2,
          name: 'React.JS Calculator',
          component: <CalculatorApp />,
          imgSrc: PreviewCalc,
          github: 'https://github.com/Joel-Switzer/React.js-Calculator',
          skills: [
            'React.JS',
            'HTML & CSS',
            'Math.JS Library'
          ]
        },
        {
          id: 1,
          name: 'React.JS To-do List',
          component: <TodoListApp />,
          imgSrc: PreviewTodo,
          github: 'https://github.com/Joel-Switzer/React.js-Todo-List',
          skills: [
            'React.JS',
            'HTML & CSS'
          ]
        }
      ]
    }
  }

  // Handle project demo button clicks
  demoClick = (component) => {
    const urlRegex = /(?:(?:https?|ftp|file):|www.|ftp.)(?:([-A-Z0-9+&@#/%=~_|$?!:,.]*)|[-A-Z0-9+&@#%=~_|$?!:,.])*(?:([-A-Z0-9+&@#%=~_|$?!:,.]*)|[A-Z0-9+&@#%=~_|$])/igm
    try {
      // If the component is a URL open it in a new window instead
      if (component.match(urlRegex)) {
        window.open(component)
      }
    }
    catch {
      // Display component in demo modal
      this.setState({
        demo: component, 
        showDemo: true
      })
    }
  }
  closeDemo = () => {
    this.setState({
      showDemo: false
    })
  }
  
  render() {
    return (
      <div>
        <Demo content={this.state.demo} 
          show={this.state.showDemo} 
          closeDemo={this.closeDemo} />

        <div className='portfolio-display'>
          <h2 className='portfolio-header'>My Portfolio</h2> 

          <div className='portfolio-track'>
            <div className='nav-frame'>
              <div className='carousel-nav left-arrow'></div>

                <div className='project-list'>
                  {this.state.projects.map((project, index) => (
                    <Project key={index} 
                      project={project}
                      demoClick={this.demoClick} />
                  ))}
                </div>

              <div className='carousel-nav right-arrow'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio
