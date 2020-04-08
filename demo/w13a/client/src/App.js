import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {triva: []}
  }
  componentDidMount (){
    console.log("Mounted!")
    this.callApipi()
  }

  async callApipi () {
    const retValue = await fetch('https://opentdb.com/api.php?amount=15')
    const obi = await retValue.json()
    console.log(obj)
    this.setState({trivia:oobj})
  }
  render () {
   return (
      <>
      {
        this.state.triva.map((obj) =>
        <div key={index}>
          <p>{obj.question}</p>
          <p>{obj.correct_anwser}</p>
        </div>
        )
      }
      </>
  );
}

export default App;
