import { useState } from "react";
import { Button,StyleSheet, TextInput, View } from "react-native";
interface Iprops {
    addTodo : (v:string) => void;
}
const InputTodo = (props : Iprops) => {
    const {addTodo} = props;
    const styles = StyleSheet.create({
        todoInput:{
              borderColor : "violet",
                borderWidth : 1,
                padding : 10,
                marginBottom:20,
                borderRadius:5
        }
    })
        const [name, setName] = useState<string>('')
      
        const handleAddNewTodo = () =>{
            addTodo(name);            
        }
    
    return (
        <>
        <View/>
              <TextInput
               onChangeText={value => setName(value)}
               //value = {name}
               autoCapitalize='none'
               //maxLength={2}
               autoCorrect={false}
               multiline
               keyboardType='numeric'
               style = {styles.todoInput}/>
              <Button
                 onPress={handleAddNewTodo}
                 title='add new'
                 />
              <View/>
              </>
    )
}
export default InputTodo;