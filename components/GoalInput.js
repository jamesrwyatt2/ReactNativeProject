import {Button, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";

function GoalInput(props) {

    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Course Goal'
                style={styles.textInput}
                value={enteredGoal}
                onChangeText={goalInputHandler}/>
            <Button title='Add Goal'
                    onPress={addGoalHandler}/>
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
});