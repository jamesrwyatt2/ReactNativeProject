import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
    <View style={styles.inputContainer}>
      <TextInput placeholder='Course Goal' style={styles.TextInput} />
      <Button title='Add Goal' />
    </View>
    <View>
      <Text>List of Goals...</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
  }
});
