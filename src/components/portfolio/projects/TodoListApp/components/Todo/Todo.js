import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Todo.css'

// This component is used for each todo item in the list
class Todo extends Component {
  // Inline styling for todo items
  getStyle = () => {
    let bg = ''
    // Toggle row colors
    if (!this.props.todo.completed) {
      bg = (this.props.index % 2) === 0 ? '#FFFAF0' : '#DCDCDC'
    } else {
      bg = '#98FB98' // Make completed rows green
    }

    return {
      background: bg,   
      padding: '1.5em',
      border: '.01em solid #808080'
    }
  }

  render() {
    const { id, title, completed } = this.props.todo // Destructuring to make code easier to read
    
    // Strike through text of completed items
    let titleStyle = 'todo-content'
    if (this.props.todo.completed) {
      titleStyle +=' todo-complete'
    }

    return (
      <div style={this.getStyle()}> 
        <div className='todo-row'>
          <label className='check-container'>
            <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)} checked={completed ? true : false} /> 
            <div className='customBox'></div>
          </label>
          <div className={titleStyle}><p>{ title }</p></div>
          <div style={{paddingLeft: '1em'}}>
            <button className='btnDel' onClick={this.props.delItem.bind(this.props.delItem, id)}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

// Ensure proptypes are required
Todo.propTypes = {
  todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default Todo
