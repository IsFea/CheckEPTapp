import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  AppRegistry
  , Dimensions
  , StyleSheet
  , Text
  , View
  , TextInput
  , TouchableHighlight
  , Button
} from 'react-native';
import Camera from 'react-native-camera';


export default function App() {
  const [newTask, setNewTask] = useState('test');
  const taskInputHandler = (enteredText) => {
    setNewTask(enteredText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Task Lists4</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={newTask}
          style={styles.input}
          onChangeText={taskInputHandler}
          value={newTask}
        />
        <Button title="+" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    bottom: 20
  },
});