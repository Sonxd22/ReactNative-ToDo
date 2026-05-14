import { APPCOLOR } from "@/utils/constain";
import { Key, useState } from "react";
import { Text, View ,TextInput,StyleSheet, KeyboardTypeOptions} from "react-native";
import { State } from "react-native-gesture-handler";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const styles = StyleSheet.create({
    inputGroup:{
    padding: 5,
    gap: 10,
 },
    text:{
        fontSize: 20,
        fontWeight: '600',
    },
    input:{
        borderWidth :1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
    eye:{
        position: 'absolute',
        right: 10,
        top :18
    }
})
interface Iprops {
    title? : string;
    keyboardType?:KeyboardTypeOptions;
    secureTextEntry?:boolean;
    value:any;
    setValue:(value:any)=>void;
}
const ShareInput = (props:Iprops) => {
    const {title,keyboardType,secureTextEntry,value,setValue} = props;
    const [isFocus,setIsFocus] = useState<Boolean>(false);
    const [isShowPassword,setIsShowPassword] = useState<Boolean>(false);
    return (
        <View style={styles.inputGroup}>
                        {title && <Text style={styles.text}>{title}</Text>}
                        <View>
                        <TextInput
                        value={value}
                        onChangeText={(text)=>setValue(text)}
                        onFocus={()=>setIsFocus(true)}
                        onBlur={()=>setIsFocus(false)}
                        keyboardType={keyboardType}
                        style={[styles.input,{borderColor:isFocus ? APPCOLOR.ORANGE : APPCOLOR.GREY}]}
                        secureTextEntry={secureTextEntry && !isShowPassword}
                        />
                        {secureTextEntry &&
                        <FontAwesome5 
                        style={styles.eye}
                        name={isShowPassword ? "eye" : "eye-slash"} 
                        size={15} 
                        color="black"
                        onPress={()=>setIsShowPassword(!isShowPassword)}
                         />
                        }
                        </View>
                    </View>
    );
}
export default ShareInput;