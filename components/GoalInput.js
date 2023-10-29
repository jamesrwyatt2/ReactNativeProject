import {Button, StyleSheet, TextInput, View, Modal, Image} from "react-native";
import {useState} from "react";

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoal)
        setEnteredGoal('');
        props.onCancelGoal();
    }

    function cancelGoalHandler() {
        props.onCancelGoal()
        setEnteredGoal('');
    }


    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/GoalInput.png')} style={{width: 200, height: 200}}/>
                <TextInput
                    placeholder='Course Goal'
                    style={styles.textInput}
                    value={enteredGoal}
                    onChangeText={goalInputHandler}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal'
                                color="#540daf"
                                onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel'
                                color="#540daf"
                                onPress={cancelGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#31136b',
        flex: 1,
        justifyContent: 'center',
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
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginVertical: 10,
    },
    button: {
        width: '40%',
        marginHorizontal: 10,
    }
});