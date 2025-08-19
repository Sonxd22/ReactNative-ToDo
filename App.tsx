import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';

export default function App() {

     const [todoList, setTodoList] = useState <ITodo[]>([])
     function randomInteger(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
       const addTodo = (text : string) =>{
            const todo = {id:randomInteger(1,1000000),title:text}
            setTodoList([...todoList,todo]);
        }
        const deleteTodo = (id: number) => {
          const newTodo = todoList.filter(todo => todo.id ! = id);
          setTodoList(newTodo)
        }
  return (
    <TouchableNativeFeedback onPress={()=>{Keyboard.dismiss}}>
    <View style={styles.container}>
      
       <InputTodo
       addTodo = {addTodo}
       />
       <ListTodo todoList={todoList}
       deleTodo={deleteTodo}/>      
  
      <StatusBar style="auto" />
    </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
});
