import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete} activeOpacity={0.8}>
            <View style={styles.listItems}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItems: {
        padding: 10,
        marginVertical: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        backgroundColor: "#c7fffd"
    }
})

export default GoalItem
