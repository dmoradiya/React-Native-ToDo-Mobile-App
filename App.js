import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome To My React Native TODO App</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter your goal" style={styles.input} />
        <Button title="Add your goal" />
      </View>
    </View>
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
});
