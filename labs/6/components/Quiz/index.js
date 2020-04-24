import Reaceat from 'react'
import { StyleSheet, View } from 'react-native'
import {Button} from 'react-native-elements'
import questions from './questions.json'
import Tiimer from '../Timer'

const TITLE_STATE =0
const QUESTION_STATE =1

const styles=StyleSheet.create({
  button: {
    width:400,
    padding: 10,
    margin:"auto"
  },
  text: {
    fontSize: 30,
    fontFamily: "Gotu",
    padding: 15,
    textAlign: 'center'
  }
})

export default class Quiz extends React.Component{
  constructor(props){
    super()
    this.state = {
      currentState: TITLE_STATE,
      counter: 0,
      currentQuestion:0
    }
  }
  nextQuestion(x){
    if (x.correct){
      this.setState({counter: this.state.counter +1})
    }
    this.setState({currentQuestion: this.state.currentQuestion +1})
  }
  render(){
    return(
      <View>
        {(this.state.currentState === TITLE_STATE)?

        <View>
          <Text style={styles.text}>Are you a Geek?</Text>
          <Button style={styles.button} title="Start" 
            onPress={() => this.setState({ currentState: QUESTION_STATE })
            }/>
        </View>
        : (this.state.currentQuestion< questions.length)?
        <View>
          <Text style={styles.text}>{question [this.state.currentQuestion].question}
          </Text>
          <View>
            {questions[this.state.currentQueustion].anwsers.map((ans, i)=> {
              return <Button style={styles.button} title={ans.text} key={i} onPress={() => this.nextQuestion(ans)} />
                
            })}
          </View>
          <Timer style={styles.text}/>
        </View>
        :
        <View>
          <Text style={styles.text}>No more.</Text>
          <Text style={styles.text}>Result: {this.state.counter}/{questions.length}</Text>
          <Button style={styles.button} title="Repeat the Geek" onPress={() => this.setState({currentState: TITLE_STATE, currentQuestion: 0, counter:0})}/>
        </View>
        }
       </View> 
    )
  }
}