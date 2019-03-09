import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Demo.scss';

export class Demo extends Component {
  render() {
    let dim = this.props.show ? 'show-demo-overlay' : 'hide-demo-overlay'
    let display = this.props.show ? 'show-modal' : 'hide-modal'

    return (
      <div>
        <div id='demo-dim-overlay'
          className={dim} 
          onClick={this.props.closeDemo}>
        </div>
        <div id='demo-modal' className={display}>
          <div className='demo-content'>
            <button className="demo-close" onClick={this.props.closeDemo}>X</button>
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

Demo.propTypes = {
  content: PropTypes.any.isRequired,
  show: PropTypes.bool.isRequired,
  closeDemo: PropTypes.func.isRequired
}

export default Demo;
