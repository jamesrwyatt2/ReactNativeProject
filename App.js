import {StyleSheet, View, FlatList} from 'react-native';
import {useState} from 'react';

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    function addGoalHandler(enteredGoal) {
        setCourseGoals(currentGoals => [...currentGoals,
            {
                text: enteredGoal,
                key: Math.random().toString(),
                id: enteredGoal,
            }]);
    }

    function deleteGoalHandler(id) {
        setCourseGoals(courseGoals => {
            return courseGoals.filter((goal) => goal.id !== id)
        })
    }

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler}/>
            <View style={styles.goalsContainer}>
                <FlatList data={courseGoals} renderItem={(itemData) => {
                    return (
                        <GoalItem
                            text={itemData.item.text}
                            id={itemData.item.id}
                            onDeleteGoalHandler={deleteGoalHandler}/>
                    )
                }

                }/>
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
        flex: 5,
    },
});
