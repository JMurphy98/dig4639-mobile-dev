import React from 'react';
import logo from './logo.svg';
import './App.css';
function NameBage (props){
  return (
    <p>The sum is {10+10}</p>
  )
}

/*class NameBage extends React.Component{
  constructor(props){
    super(props);
  }
  render (){
  return(
  <p>The sum is {10+10}</p>
  )
  }
}
*/

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NameBage name="Julia" />
        <p>
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;
