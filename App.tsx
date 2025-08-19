import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

    const [name, setName] = useState<string>('son')
     const [todoList, setTodoList] = useState ([
        {id:1 , title : 'cr11'},
        {id:2 , title : 'sdas'},
        {id:3 , title : 'aaddas'},
        {id:4 , title : 'addddddads'},
        {id:5 , title : 'aaddaadads'},
        {id:6 , title : 'aaddaadads'},
        {id:7 , title : 'aaddaadads'},
        {id:8 , title : 'aaddaadads'},
        {id:9 , title : 'aaddaadads'},
        {id:10 , title : 'aaddaadads'},
        {id:11 , title : 'aaddaadads'}
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
      <ScrollView style={{
          borderColor:"red",
          borderWidth :1,
          marginTop:10
        }}>
        {todoList.map(todo => {
          return (
            <Text key={todo.id} style={styles.todo}>{todo.title}</Text>
          )
        })}
      </ScrollView>
      <Text style={styles.text}>{name}</Text>
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
