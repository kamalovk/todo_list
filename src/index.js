import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../src/todo-list/todo-list';

import Header from '../src/header/header';

import '../src/index.css';
import ItemAdd from '../src/item-add/item-add';

class App extends Component {
  state = {
    Data: [
      this.createTask('Sample Task')
    ],
    filter: 'done'
  }
  createTask(task) {
    return {
      task,
      task_mark: false,
      done: false,
      id: Math.random()*100
    }
  }
  deleteTask = (id) => {
    this.setState(({Data}) => {
      const idx = Data.findIndex((el) => el.id === id);
      
      const newData = [...Data.slice(0, idx), ...Data.slice(idx +1)]
      return{
        Data: newData
      }
    })
  }
  addTask = (text) => {
    const newTask = {
      task: text,
      task_mark: false,
      done: false,
      id: Math.random()*100
    }
    this.setState(({Data})=> {
      const newArray = [
        ...Data, newTask
      ]
      return{
        Data: newArray
      }
    })
    
  }
  onTaskParametres(arr, id, prop) {
    const idx = arr.findIndex((el) => el.id === id);

      const oldItem = arr[idx];
      const newItem = {...oldItem, [prop]: !oldItem[prop]};

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx+1)
      ];
      
  }
  onTaskMark = (id) => {
    this.setState(({Data})=> {
      return{
        Data: this.onTaskParametres(Data, id, 'task_mark')
      }
    })
  }
  onTaskDone = (id) => {
    this.setState(({Data}) => {
      return{
        Data: this.onTaskParametres(Data, id, 'done')
      }
    })
  }
  filter(items, filter) {
    switch(filter) {
      case 'all': 
        return items;
      case 'mark':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => !item.done);
      default:
        return items;
    }

  }
  render(){
    
    return(
      <div className='todo-block'>
        <Header />
        
        <TodoList 
          task_data = {this.state.Data}
          onDeleted = { this.deleteTask}
          onTaskMark = { this.onTaskMark}
          onTaskDone = { this.onTaskDone}/>
        <ItemAdd onAdd = {this.addTask}/>
      </div>
    )
  }
}

ReactDOM.render( <App />,
  document.getElementById('root')
);

