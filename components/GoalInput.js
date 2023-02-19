import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal , Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('');
  };

  function endGoalHandler() {
    props.onEndGoal()
    setEnteredGoalText('');
  };


  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} 
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
          <Button title='Add Goal'color="#5e0acc" onPress={addGoalHandler} />
          
          </View>
          <View  style={styles.button}>
          <Button title='Cancel' color='#f31282' onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  )

}


export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding : 16,
    backgroundColor : '#311b6b'
  },
  textInput: {
    width: '100%',
    borderColor: '#e4d0ff',
    backgroundColor : '#e4d0ff',
    color:'#120438',
    borderWidth: 1,
    padding: 16,
    borderRadius: 6,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop : 10
  },
  button: {
    width: 100,
    marginHorizontal :8,
  },
  image: {
    width: 100,
    height: 100,
    margin:20,
  }


});