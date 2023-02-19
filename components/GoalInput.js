import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('');
    };

  return (

    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  )

}


export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    width: '70%',
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 8,
    marginRight: 8
  }
});