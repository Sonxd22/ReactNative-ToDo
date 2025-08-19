import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [name, setName] = useState<string>('son')
 
  return (
    <View style={styles.container}>
      <TextInput
       onChangeText={value => setName(value)}
       //value = {name}
       autoCapitalize='none'
       //maxLength={2}
       autoCorrect={false}
       multiline
       keyboardType='numeric'
       style = {{
        borderColor : "violet",
        borderWidth : 1,
        padding : 10
        
      }}/>
      <Button title='add new'/>
      <Text style={styles.text}>{name}</Text>
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
