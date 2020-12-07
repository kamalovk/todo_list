
import React, { Component } from 'react'
import TodoItem from '../todo-list-item/todo-list-item';

export default class TodoList extends Component {
  
  render(){

  const {task_data, onDeleted, onTaskMark, onTaskDone} = this.props;

  const elements = task_data.map((item) => {
    const { id, ...itemProps} = item;
    return(
      <div key={id} className='todo-list-block'>
        <TodoItem 
          {...itemProps}
          onDeleted = {() => onDeleted(id)}
          onTaskDone = {() => onTaskDone(id)}
          onTaskMark = {() => onTaskMark(id)}
          /> 
      </div>
    )
  })
    return(
      <div>    
       {elements}
      </div>  
    )
  }
}