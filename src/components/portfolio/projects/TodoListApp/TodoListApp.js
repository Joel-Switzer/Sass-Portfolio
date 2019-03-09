import React, { Component } from 'react'
import TodoList from './components/TodoList/TodoList'
import Header from './components/Header/Header'
import AddTodo from './components/AddItem/AddItem'
import './TodoListApp.css'

class TodoListApp extends Component {
  // This holds the state of each item in the TodoList
  state = {
    todos: [
      {
        id: 1,
        title: 'Add item to the list by submitting it above.',
        completed: false
      },
      {
        id: 2,
        title: 'Mark item as complete with the checkbox.',
        completed: false
      },
      {
        id: 3,
        title: 'Delete item from the list with the "X" button.',
        completed: false
      },
      {
        id: 4,
        title: 'Make my first React app.',
        completed: true
      }
    ]
  }

  // Toggle the completed state of the item checked
  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed // Toggle complete
        }
        return todo
      })
    })
  }

  // Delete item when red button is clicked
  delItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)] // Filter out the todo matching the ID of the item clicked
    })
  }

  addItem = (title) => {
    // Build new todo item
    const newItem = {
      id: Math.floor(Math.random() * 99999999), // Generate unique ID
      title,
      completed: false
    }
    // Update state & add new item
    this.setState({
      todos: [...this.state.todos, newItem] 
    })
  }

  render() {
    return (
      <div className="todoListApp">
        <Header />
        <AddTodo addItem={this.addItem} />
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} delItem={this.delItem} />
      </div>
    )
  }
}

export default TodoListApp