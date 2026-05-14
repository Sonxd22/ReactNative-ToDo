import AntDesign from '@expo/vector-icons/AntDesign';
import {Pressable, Share, StyleProp, StyleSheet, Text, TextStyle, View, } from "react-native"
import React, { ReactNode } from 'react';
import { APPCOLOR } from '@/utils/constain';
const styles = StyleSheet.create({
    btnContainer:{
        paddingHorizontal:15,
        paddingVertical:10,
        flexDirection:"row",
        gap : 10,
        alignItems:'center',
        backgroundColor:APPCOLOR.ORANGE
    },
})
interface Iprops{
    title : string;
    onPress:() => void;
    textStyle?: StyleProp<TextStyle>;
    pressStyle?: StyleProp<TextStyle>;
    btnStyle?: StyleProp<TextStyle>;
    icon?: ReactNode;
}
const ShareButton = (props:Iprops) =>{
    const {title,onPress,textStyle,pressStyle,btnStyle,icon}=props;
    return (
        <Pressable 
        style= {({pressed}) =>([{ 
        opacity : pressed === true ? 0.5:1,
        alignSelf:"flex-start"
        },pressStyle])}
        onPress={onPress}
        >
        <View style={[styles.btnContainer, btnStyle]}>
            {icon}
       
        <Text style={textStyle}>{title}</Text>
        </View>
        </Pressable> 
    )
}
export default ShareButton