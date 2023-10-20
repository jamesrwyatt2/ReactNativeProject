import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredGoal(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    console.log(courseGoals);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.textInput}
          onChangeText={goalInputHandler} />
        <Button title='Add Goal'
          onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>

        {courseGoals.map((goal) =>
          <Text key={goal}>{goal}</Text>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,

  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput: {
    width: '70%',
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  },
  goalsContainer: {
    flex: 3,
  }
});
