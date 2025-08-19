import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [age, setAge] = useState<Number>(22)
    const [name, setName] = useState<String>('son')
    const test = false
    const [person, setPerson] = useState([{
      name : "son",
      age : 25
     }]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{JSON.stringify(person)}</Text>
      <Text style={styles.text} >Open up App.tsx to start</Text>
      <Text style={styles.text1} >working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text1:{
    fontSize : 30,
    color : "green",
  },
  text:{
      fontSize : 30,
      color : "red"
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
