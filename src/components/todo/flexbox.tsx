import { Text, View ,StyleSheet, ImageBackground} from "react-native"
const styles = StyleSheet.create({
    container:{
        flex : 1,
        marginTop : 40,
        borderWidth : 1,
        borderColor : "red",
        flexDirection:"column",
        justifyContent : "center",
        //alignItems:"center"
    },
    item1:{
        flex:1,
        padding:20,
        borderWidth:1,
        backgroundColor : "red",
        //height:250,
        width:250
    },
      item2:{
        padding:20,
        borderWidth:1,
        backgroundColor : "green",
        //height:300,
        width:300
      },
    
      item3:{
        padding:20,
        borderWidth:1,
        backgroundColor : "pink",
        height:100,
        width:100
    },
      item4:{
        padding:20,
        borderWidth:1,
        backgroundColor : "white",
    }
})
const FlexBox = ()=>{
    return(
        <View style = {styles.container}>
            <View style = {styles.item1}>
                <Text>Item1</Text>
            </View>
            <View style = {styles.item2}>
                <Text>Item2</Text>
            </View>
            <View style = {styles.item3}>
                <Text>Item3</Text>
            </View>
            <View style = {styles.item4}>
                <Text>Item4</Text>
            </View>
        </View>
    )
}
export default FlexBox