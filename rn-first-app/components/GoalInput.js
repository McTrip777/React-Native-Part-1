import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [goalText, setGoalText] = useState("")

    const goalTextHandler = (enteredText) => {
        setGoalText(enteredText);
    }

    const goalHandler = () => {
        props.addGoalHandler(goalText)
        setGoalText("")
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInput}
                    onChangeText={goalTextHandler}
                    value={goalText}
                />
                <View style={styles.modalButtons}>
                    <Button title="Cancel" onPress={props.closeModel} />
                    <Button title="Add" onPress={goalHandler} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
    textInput: {
        borderColor: 'black',
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        borderTopWidth: 1,
        borderRightWidth: 1,
        padding: 5,
        margin: 10,
        width: "70%"
    },
    modalButtons: {

    }
})

export default GoalInput
