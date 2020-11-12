import React, { Component } from 'react';
import '../todo-list-item/todo-list-item.css'
export default class TodoItem extends Component{
  
  render(){

   const {task, onDeleted, onTaskMark, onTaskDone, task_mark, done} = this.props; 
   
   let class_style = 'style'
   let important_style = 'style'
   if(done) {
      class_style += '-done'
   }
   if(task_mark) {
     important_style += '-important'
   }
    return(
      <div className='list-item' >
        <span onClick={onTaskDone} id={class_style} className={important_style}>{ task }</span>
        <div className='list-buttons'>
          <button onClick ={onDeleted}>Delete</button>
          <button onClick = {onTaskMark}>Mark</button>
        </div>
        
      </div>
    )
  }
}