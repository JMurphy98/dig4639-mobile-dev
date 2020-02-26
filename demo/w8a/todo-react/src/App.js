import React from 'react';
import './App.css';
import todoList from './todoList.json'

function TodoItem(props){
  return <p className='card'>{props.content}</p>
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: todoList,
      showOnlyUncompletedTasks: false
    }
  }  

  addTask(){
    console.log(this.refs.taskContent.value)
    let newtask =
      { "content": this.refs.taskContent.value, "priority":  3, "completed": false}
    let currentList = this.state.todoList
    currentList.push(newtask) 
    this.setState({todoList: currentList})
  }

  render () {
    return (
      <>
      <div className= "inputTask">
        <input type="text" ref="taskContent"/>
        <input type="button" value="Add Task" onClick={() => this.addTask()}/>
        <input type="checkbox" ref="completedFilter" 
          onChange={(e) => this.setState({showOnlyUncompletedTasks: e.target.checked})}
          id="completedFilter" name="completedFilter" value="completed"></input>
        <label htmlFor="completedFilter">Show only uncompleted tasks</label>
        </div>
      {(this.state.showOnlyUncompletedTasks ? 
        this.state.todoList.filter((v) => !v.completed) 
          :
        this.state.todoList)
        .map((v, i) => <TodoItem key={i} priority={v.priority}
          content={v.content} completed={v.completed}/>)}
      </>
    );
  }
}

export default App;
