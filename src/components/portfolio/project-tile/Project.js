import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Project.scss';

// Icons
import IconGithub from '../images/icon-github.png';
import IconPreview from '../images/icon-play.png';


export class Project extends Component {

  // Place medals next to the first and second place skills
  rankSkill = (i) => {
    let first = <span role='img' aria-label='First place' className='rank-1'>&#129351;</span>
    let second = <span role='img' aria-label='Second place' className='rank-2'>&#129352;</span>
    let third = <span role='img' aria-label='Third place'>&#x1F949;</span>
    let norank = <span className='norank'>&gt;</span>
    let rank = ''
    switch (i) {
      case 0:
        rank = first
        break
      case 1:
        rank = second
        break
      case 2:
        rank = third
        break
      default:
        rank = norank
        break
    }
    return rank
  }

  render() {
    const {name, imgSrc, skills, component, github} = this.props.project // Destructure
    return (
      <div className='project-tile'>
        <div className='tile-info'> 
          <h2>{name}</h2>
          <span className='center-content'>
            <img src={imgSrc} alt='Project preview'/>
          </span>
          <h3>Technologies used:</h3>
          <div className='center-content'>
            <ul className='skills-list'>
              {skills.map((skill, i) => (
                <li key={i}>
                  {this.rankSkill(i)} {' '} 
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='tile-demo'>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <button className='btn-source'>
              <img src={IconGithub} alt='Github' />
              <label>Code</label>
            </button>
          </a>
          <button className='btn-demo' onClick={this.props.demoClick.bind(this.props.demoClick, component)}>
            <img src={IconPreview} alt='Preview'/>
            <label>Demo</label>
          </button>
        </div>
      </div>
    )
  }
}

// Require prop types
Project.propTypes = {
  project: PropTypes.object.isRequired,
  demoClick: PropTypes.func.isRequired
}

export default Project;
