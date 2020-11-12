import React, { Component } from 'react';
import '../item-add/item-add.css';

export default class ItemAdd extends Component{
  state = {
    task: ''
  }
  onTaskChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.task)
    const sample = e.target;
    sample.reset();
  }
  render(){

    return(
      <form onSubmit={this.onSubmit} className='form-block'>
        
        <input type='text' onChange={this.onTaskChange} placeholder='type here' maxLength=''/>
        <button>Add</button>
      </form>
    )
  }
}