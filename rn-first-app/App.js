import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoal, setCourseGoal] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    setCourseGoal(courseGoal => [...courseGoal, { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false)
  }
  const closeModel = () => {
    setIsAddMode(false)
  }

  const removeGoalHandler = goalId => {
    setCourseGoal(currentCourseGoals => {
      return currentCourseGoals.filter(item => goalId !== item.id)
    })
  }

  return (
    <View style={styles.screen}>
      {/* Input Field*/}
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        addGoalHandler={addGoalHandler}
        closeModel={closeModel}
      />
      {/* List Field*/}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => (
          <GoalItem title={itemData.item.value} onDelete={() => removeGoalHandler(itemData.item.id)} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
