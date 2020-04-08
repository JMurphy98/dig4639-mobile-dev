import React from 'react'
import {StyleSheet, Test, View} from'react-native'
import {Button} from 'react-native-elements'

const style = StyleSheet.create({
  timer: {
    width:425,
    padding: 10,
    margin:"auto"
  },
  timerText: {
    fontSize: 35,
    fontFamily: "Gotu",
    paddingTop:50,
    textAlign: 'center'
  }
})
class Tiimer extends React.Component{
  constructor(props){
    super(props);
    this.state= {seconds: 0};
    this.tick=this.tick.bindthis();
  }
  tick (){
    this.interval = setInterval(()=> {
      this.setState(prvState =>  ({
        seconds: pevState.seconds + 1
      }));
    }, 1000);
  }
  componentWillUnmount (){
    clearInterval(this.interval);
  }
  render(){
    return(
      <View>
      <Text style={style.timerText}>Time: {this.state.seconds}</Text>
      <Button style={styles.timer} title= "Start the Clock!" onPress={this.tick}/>
      </View>
    );
  }
}
export default Timer;