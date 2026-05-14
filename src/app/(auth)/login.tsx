import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { registerAPI } from "@/utils/api";
import { APPCOLOR } from "@/utils/constain";
import { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import Toast from "react-native-root-toast";
import { Link, router } from "expo-router";
import { Stack } from 'expo-router';


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
const LoginPage = () => { 

        const [email,setEmail] = useState<string>("");
        const [password,setPassword] = useState<string>("");

      
       const handleLogin = async () => {
        // try {
        //         const res = await registerAPI(email,password,name);
        //         if(res.data){
        //            router.replace({
        //             pathname:"/(auth)/verify",
        //             params: {email: email}
        //            });
        //         }else{
        //             const m = Array.isArray((res as any)?.message) 
        //             ? (res as any).message[0] : (res as any).message;
        //             Toast.show(m || "Đăng ký thất bại",{
        //                 duration: Toast.durations.LONG,
        //                 textColor: "white",
        //                 backgroundColor:APPCOLOR.ORANGE,
        //                 opacity: 1,
        //             });
        //         }
        //     } catch (error: any) {
        //         console.log("check error",error)
        //         Toast.show(error?.response?.data?.message || error?.message || "Lỗi đăng ký", {
        //             duration: Toast.durations.LONG,
        //             textColor: "white",
        //             backgroundColor: "#FF6B6B",
        //             opacity: 1,
        //         });
        //     }
        //  }
       };

    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            <View>
                <Text style={{
                    fontSize: 25,
                    fontWeight: '600',
                    marginVertical: 30,
                }}>Đăng nhập tài khoản</Text>
            </View>
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
            title="Đăng nhập" 
            onPress={() => {handleLogin()}}
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
                                        <Link href={"/(auth)/signup"}> 
                                        <Text style={{ color: "black", textDecorationLine: "underline" }}>
                                            Đăng ký.
                                        </Text>
                                        </Link>
                                    </View>
            <SocialButton 
            title="Đăng nhập với"
            />
        </View>
        </SafeAreaView>
    );
};

export default LoginPage;