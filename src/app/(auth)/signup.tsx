import { Text, View ,TextInput,StyleSheet, Share, processColor} from "react-native";
import ShareButton from "components/button/share.button"
import { APPCOLOR } from "@/utils/constain";
import { SafeAreaView } from "react-native-safe-area-context";
import ShareInput from "@/components/input/share.input";
import SocialButton from "@/components/button/social.button";
import { Link, router } from "expo-router";
import {  useState } from "react";
import axios from "axios";
import { Try } from "expo-router/build/views/Try";
import { registerAPI } from "@/utils/api";
import Toast from "react-native-root-toast";
import OTPTextView from 'react-native-otp-textinput';


const styles = StyleSheet.create({
 container:{
    flex:1,
    paddingTop: 30,
    marginHorizontal: 20,
 },
 inputGroup:{
    padding: 5,
    gap: 10,
 },
    text:{
        fontSize: 20,
        fontWeight: '600',
    },
    input:{
        borderColor: '#d0d0d0',
        borderWidth :1,
        paddingHorizontal: 7,
        paddingVertical: 10,
        borderRadius: 10,
    }
})
const SignupPage = () => { 

        const [name,setName] = useState<string>("");
        const [email,setEmail] = useState<string>("");
        const [password,setPassword] = useState<string>("");

      
       const handleSignup = async () => {
        try {
                const res = await registerAPI(email,password,name);
                if(res.data){
                   router.replace({
                    pathname:"/(auth)/verify",
                    params: {email: email}
                   });
                }else{
                    const m = Array.isArray((res as any)?.message) 
                    ? (res as any).message[0] : (res as any).message;
                    Toast.show(m || "Đăng ký thất bại",{
                        duration: Toast.durations.LONG,
                        textColor: "white",
                        backgroundColor:APPCOLOR.ORANGE,
                        opacity: 1,
                    });
                }
            } catch (error: any) {
                console.log("check error",error)
                Toast.show(error?.response?.data?.message || error?.message || "Lỗi đăng ký", {
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor: "#FF6B6B",
                    opacity: 1,
                });
            }
         }

    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View>
                <Text style={{
                    fontSize: 25,
                    fontWeight: '600',
                    marginVertical: 30,
                }}>Đăng ký tài khoản</Text>
            </View>
            <ShareInput 
            title="Họ và Tên"
                value={name}
                setValue={setName}
            />
            <ShareInput 
            title="Email"
            keyboardType="email-address"
            value={email}
                setValue={setEmail}
            />
            <ShareInput 
            title="Password"
            secureTextEntry={true}
            value={password}
                setValue={setPassword}
            />
            <View style={{marginVertical: 10}} />
             <ShareButton
            title="Đăng ký" 
            onPress={() => {handleSignup()}}
            textStyle={{color:"#fff",paddingVertical:5,textTransform:"uppercase"}}
            btnStyle={{justifyContent: 'center',
                borderRadius:30,
                backgroundColor:APPCOLOR.ORANGE,
                paddingVertical:10,
                
            }}
            pressStyle={{alignSelf:"stretch"}}
            />
            <View style={{
                                        marginVertical: 15,
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        gap: 10,
                                    }}>
                                        <Text style={{ color: "black" }}>
                                            Đã có tài khoản?
                                        </Text>
                                        <Link href={"/(auth)/login"}> 
                                        <Text style={{ color: "black", textDecorationLine: "underline" }}>
                                            Đăng nhập.
                                        </Text>
                                        </Link>
                                    </View>
            <SocialButton title="Đăng ký với" />
        </View>
        </SafeAreaView>
    );
};

export default SignupPage;