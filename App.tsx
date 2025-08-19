import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [name, setName] = useState<string>('son')
     const [todoList, setTodoList] = useState ([
        {id:1 , title : 'cr11'},
        {id:2 , title : 'sdas'},
        {id:3 , title : 'aaddas'},
        {id:4 , title : 'addddddads'},
        {id:5 , title : 'aaddaadads'}
     ])
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
      <Button
         onPress={()=>{
          alert('tap me')
         }}
         title='add new'/>
      <View style={{
          marginTop:10
        }}>
        {todoList.map(todo => {
          return (
            <Text style={styles.todo}>{todo.title}</Text>
          )
        })}
      </View>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text} >Open up App.tsx to start</Text>
      <Text style={styles.text} >working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  todo:{
    backgroundColor:"pink",
    fontSize : 30,
    marginBottom : 10,
    padding : 10
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
    marginTop:50
  },
});
