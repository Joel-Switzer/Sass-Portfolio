import React, { Component } from 'react'
import './AddItem.css'

// This component renders a list of Todo components
class AddItem extends Component {
  state = {
    title: ''
  }

  // Update component state
  onChange = (e) => this.setState({ title: e.target.value })

  // Submit form
  onSubmit = (e) => {
    e.preventDefault() // Prevent default submit behavior
    if (this.state.title === '') {
        this.props.addItem('Do nothing.')
    } else {
        this.props.addItem(this.state.title)
    }
    this.setState({ title: ''}) // Reset state to default
  }

  render() {
    return (
      <form className='submit-main' onSubmit={this.onSubmit}>
          <input className='textIn' 
              type='text'
              name='title'
              placeholder='Type in here and click the button to the right ...'
              value={this.state.title}
              onChange={this.onChange} />

          <input className='submit-btn'
              type='submit' 
              value='Add Item' />
      </form>
    )
  }
}

export default AddItem