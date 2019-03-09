import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Keypad.css'

export class Keypad extends Component {
  render() {
    return (
      <div className='keypad'>
        <div className='num-pad'>
            <button value='9' onClick={this.props.onClick}>9</button>
            <button value='8' onClick={this.props.onClick}>8</button>
            <button value='7' onClick={this.props.onClick}>7</button>
            <button value='6' onClick={this.props.onClick}>6</button>
            <button value='5' onClick={this.props.onClick}>5</button>
            <button value='4' onClick={this.props.onClick}>4</button>
            <button value='3' onClick={this.props.onClick}>3</button>
            <button value='2' onClick={this.props.onClick}>2</button>
            <button value='1' onClick={this.props.onClick}>1</button>
            <button value='0' id='btn-0' onClick={this.props.onClick}>0</button>
            <button value='.' id='btn-decimal' onClick={this.props.onClick}><span>.</span></button>
        </div>

        <button id='btn-clear' value='clear' onClick={this.props.submit}><span>C</span></button>
        <button id='btn-sign' value='sign' onClick={this.props.submit}><span>&plusmn;</span></button>
        <button id='btn-backspace' value='bksp' onClick={this.props.submit}><span>&#8678;</span></button>
        <button id='btn-divide' className='btn-ops' value='/' onClick={this.props.submit}><span>&divide;</span></button>
        <button id='btn-multiply' className='btn-ops' value='*' onClick={this.props.submit}><span>&times;</span></button>
        <button id='btn-subtract' className='btn-ops' value='-' onClick={this.props.submit}><span>&minus;</span></button>
        <button id='btn-plus' className='btn-ops' value='+' onClick={this.props.submit}><span>+</span></button>
        <button id='btn-enter' className='btn-ops' value='=' onClick={this.props.submit}><span>=</span></button>
      </div>
    )
  }
}

// Ensure proptypes are required
Keypad.propTypes = {
  onClick: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
}

export default Keypad
