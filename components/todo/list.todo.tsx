import { FlatList, Text ,StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  todo:{
    backgroundColor:"pink",
    fontSize : 30,
    marginBottom : 10,
    padding : 20
  }
})

interface ITodo {
  id: number;
  title: string;
}

interface IProps {
  todoList: ITodo[];
  deleTodo:(v:number) => void;
}

const ListTodo = (props: IProps) => {
  const { todoList , deleTodo} = props;
  console.log({todoList})
  return (
    <>
    <Text>{JSON.stringify(todoList)}</Text>
     <FlatList
      style={{
        borderColor:"red",
        borderWidth :1,
        marginTop:20
      }}
      data={todoList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) =>{
         return (
        <TouchableOpacity onPress={() => deleTodo(item.id)}>
        
        <Text
       style = {styles.todo}>
        {item.title}
        </Text></TouchableOpacity> 
      )
      }}
      />
    </>
  );
}

export default ListTodo;
