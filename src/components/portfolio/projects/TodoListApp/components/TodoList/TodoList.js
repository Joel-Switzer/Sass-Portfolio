import React, { Component } from 'react'
import Todo from '../Todo/Todo'
import PropTypes from 'prop-types'
import './TodoList.css'

// This component renders a list of Todo components
class TodoList extends Component {
  render() {
    return (
      <div className='todo-container'>
        {this.props.todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} index={index} toggleComplete={this.props.toggleComplete} delItem={this.props.delItem} />
        ))}
      </div>
    )
  }
}

// Ensure proptypes are required
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delItem: PropTypes.func.isRequired
}

export default TodoList