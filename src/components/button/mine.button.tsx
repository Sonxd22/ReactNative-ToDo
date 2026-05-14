import AntDesign from '@expo/vector-icons/AntDesign';
import {Pressable, StyleSheet, Text, View, } from "react-native"
const styles = StyleSheet.create({
    btnContainer:{
        borderWidth:1,
        borderColor:"green",
        borderRadius:5,
        paddingHorizontal:15,
        paddingVertical:10,
        flexDirection:"row",
        gap : 10,
        alignItems:'flex-start',
        backgroundColor:"#ccc"
    },
    text : {
        textTransform : "uppercase"
    }
})
interface Iprops{
    title : string;
    onPress:() => void;
}
const MineButton = (props:Iprops) =>{
    const {title,onPress}=props;
    return (
        <Pressable 
        style= {({pressed}) =>({ 
        opacity : pressed === true ? 0.5:1,
        alignSelf:"flex-start"
        })}
        onPress={onPress}
        >
        <View style={styles.btnContainer}>
        <AntDesign name="pluscircle" size={24} color="black" />
        <Text style={styles.text}>{title}</Text>
        </View>
        </Pressable> 
    )
}
export default MineButton