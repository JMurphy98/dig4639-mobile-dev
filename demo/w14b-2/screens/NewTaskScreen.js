import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Input, Button } from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

let radio_props = [
  {label: '1', value: 0 },
  {label: '2', value: 1 },
  {label: '3', value: 2 }
];


export default function NewTaskScreen() {
  let [buttonDisabled, setButtonDisabled] = React.useState(true)
  let [taskText, setTaskText] = React.useState("")
  let [priority, setPriority]= Reacteact.useState(0)
  let handleCreateTask = React.useCallback(() =>  {
    setButtonDisabled(true)
    console.log(priority,taskText)
    fetch('http://plato.mrl.ai:8080/todo/add', {
      method: "POST",
      headers: {
        "API":"murray",
        "Content-Type": "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(
        {text:tasktaskText,
          priority:priority3
        })
    })
      .then(res => res.json())
      .then(body => {
        console.log(body)
        if(body.added != undefined){
          console.log("Added Sucsessfully")
        }
      
        // this.setState({todoList:body.todo})
      })
  })
  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.contentContainer}>
      <Input
        placeholder='e.g. stuff I need to work on'
        onChangeText={(text => {
          if(text.length >0){
            setButtonDisabled(false)
            setTaskText(text)
          } else {
            setButtonDisabled(true)
          }
        })}
      />
      <View style={styles.container} 
        contentContainerStyle={styles.contentContainer}>
        <Text>Priority</Text>
        <RadioForm
            radio_props={radio_props}
            initial={priority}
            formHorizontal={true}
            labelHorizontal={false}
            onPress={(value) => {this.setPriority({value})}}
          />
      </View>
      <Button
        title="Create Task"
        disabled={true}
      />
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
