import React, { Component } from 'react';
import '../item-add/item-add.scss';

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
        
        <input type='text' onChange={this.onTaskChange} placeholder='Type your text here' maxLength='40'/>

        <button> <svg height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M38 6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zm-4 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"/><path d="M0 0h48v48H0z" fill="none"/></svg></button>
        
      </form>
    )
  }
}