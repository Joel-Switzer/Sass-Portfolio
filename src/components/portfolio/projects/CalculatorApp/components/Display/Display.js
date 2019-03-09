import React, { Component } from 'react'
import './Display.css'
import PropTypes from 'prop-types'

export class Display extends Component {
  render() {
    //console.log(history)
    return (
      <div className='calculator-display'>
        <div id='calc-history'>
          {this.props.history}
        </div>
        <div id='calc-answer'>
          { this.props.current }
        </div>
      </div>
    )
  }
}

// Ensure proptypes are required
Display.propTypes = {
  current: PropTypes.string.isRequired,
  history: PropTypes.array.isRequired,
  answer: PropTypes.string.isRequired
}

export default Display
