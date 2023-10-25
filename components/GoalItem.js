import {Text, StyleSheet, View, Pressable} from "react-native";

function GoalItem(props) {
    console.log(props.id)

    return (
        <Pressable onPress={ props.onDeleteGoalHandler.bind(this, props.id)}>
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{props.text}</Text>
            </View>
        </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
    },
})