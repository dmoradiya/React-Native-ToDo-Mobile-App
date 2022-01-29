import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { v4 as uuidv4 } from "uuid";

export default function App() {

  const [goalInput, setGoalInput] = useState('');
  const [addGoal, setAddGoal] = useState([]);

  const goalInputHandler = (enteredText) => {    
    setGoalInput(enteredText);
  }

  const addGoalHandler = () => {
    setAddGoal(currentGoal => [...currentGoal, {id: uuidv4(), goalValue: goalInput}]);    
  }

  const onDeleteHandler = (id) => {    
    setAddGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id !== id);
    });
  }
  console.log(addGoal);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome To My React Native TODO App</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your goal"
            style={styles.input}
            onChangeText={goalInputHandler}
          />
          <Button title="Add your goal" onPress={addGoalHandler} />
        </View>
        <FlatList
          data={addGoal}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <View style={styles.flatListContainer}>
              <Text style={styles.allGoal}>{itemData.item.goalValue}</Text>
              <Text>{new Date().toLocaleString()}</Text>
              <Button
                title="DELETE"
                color="red"
                onPress={onDeleteHandler.bind(this, itemData.item.id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    textAlign: "center",
    marginVertical: 50,
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  input: {
    borderBottomColor: "#333",
    borderBottomWidth: 1,
    paddingVertical: 1,
    width: "60%",
  },
  allGoal: {
    color: "black",
    padding: 8,
    margin: 5,
    backgroundColor: "green",
    
  },
  flatListContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
});
