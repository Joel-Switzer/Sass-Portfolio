import React, { Component } from 'react';
import Display from './components/Display/Display';
import Keypad from './components/Keypad/Keypad';
import Math from 'mathjs';
import './CalculatorApp.css';

export class CalculatorApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: '',
      sequence: [],
      lastOp: undefined
    }
  }

  // Append the value to the string stored in state if it was a number key
  handleKeypad = (e) => {
    const temp = this.state.current
    if (!isNaN(parseInt(e.target.value))) {
      this.setState({current: (temp + e.target.value)})
    } 
    else if (e.currentTarget.value === '.') {
      // Check for multiple decimals
      const count = temp.split('.').length - 1
      if (count < 1) {
        this.setState({
          current: (temp + e.currentTarget.value)
        })
      }
    }
  }

  // Handle the function keys
  handleMath = (e) => {
    let num = this.state.current
    let sender = e.currentTarget.value

    // Switch to handle operator buttons
    switch(sender) {
      case 'clear': // Clear state
        this.setState({
          sequence: [],
          current: ''
        })
        break
      case 'sign':  // Invert sign
        this.setState({
          current: (num*-1)
        })
        break
      case 'bksp':  // Backspace
        if (num !== ''){
          const back = num.substring(0, num.length - 1)
          this.setState({
            current: back
          })
        }
        break
      case '=': 
        if (num !== '') {
          // Fix case of invalid decimal at end
          if (String(num).charAt(num.length -1) === '.') {
            num += '0'
          }

          // Format & calculate the sequence of operations
          let regex = /,/g
          let ops = String([...this.state.sequence, num]).replace(regex, '')
          let answer = Math.format(Math.eval(ops), { precision: 10 })

          // Update state to display answer
          this.setState({
            sequence: [],
            lastOp: undefined,
            current: answer
          })
        }
        break
      default:  // Anything else must be an operator key
        if (!(sender === '/' && num === 0) && sender !== undefined && num !== '') {
          let temp = [...this.state.sequence]
          temp.push(num, sender)
      
          this.setState({
            current: '',
            lastOp: sender,
            sequence: [temp]
          })
        }
        break
    }
  }

  render() {
    return (
      <div className='calculatorApp'>
        <Display 
          current={String(this.state.current)} 
          history={[this.state.sequence]} 
          answer={String(this.state.answer)} />

        <Keypad 
          onClick={this.handleKeypad} 
          submit={this.handleMath} />
      </div>
    )
  }
}

export default CalculatorApp;
