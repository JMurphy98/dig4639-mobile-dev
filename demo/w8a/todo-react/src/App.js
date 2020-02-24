import React from 'react';
import './App.css';

const todoList1 = [
  {completed: true, priority: 1, content: 'completed demo'},
  {completed: true, priority: 2, content: 'completed demo 2'},
  {completed: true, priority: 1, content: 'completed demo'},
  {completed: true, priority: 2, content: 'completed demo 2'},
  {completed: false, priority: 3, content: 'completed demo 3'},
]

function TodoItem(props){
  return <p>{props.content}</p>
}

function App() {
  let array = todoList1.map((value) => 
    <TodoItem content={value.content}
      priority={value.priority}
      completed={value.completed}/>
  )
  return (
    array
  );
}

export default App;
