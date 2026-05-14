import { useLocalSearchParams, router } from "expo-router";
import LoadingOverlay from "@/components/loading/overlay";
import { resendCodeAPI, verifyCodeAPI } from "@/utils/api";
import { APPCOLOR } from "@/utils/constain";
import { useEffect, useRef, useState } from "react";
import { View,Text, StyleSheet, Keyboard } from "react-native"
import OTPTextView from 'react-native-otp-textinput';
import Toast from "react-native-root-toast";

const styles = StyleSheet.create({
    container:{
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    heading:{
        fontSize: 25,
        fontWeight: '600',
        marginVertical: 20,
    }
})
const VerifyPage = () => {
    const [isSubmit,setIsSubmit] = useState<boolean>(false);
    const otpRef = useRef<OTPTextView>(null);
    const [code,setCode] = useState<string>("");
    const { email } = useLocalSearchParams();
    const verifyCode = async () => {
        Keyboard.dismiss();
        setIsSubmit(true);
            const res = await verifyCodeAPI(email as string, code);
            setIsSubmit(false);
            otpRef.current?.clear();
           if(res.data){
                        Toast.show("Xác thực thành công",{
                                    duration: Toast.durations.LONG,
                                    textColor: "white",
                                    backgroundColor:APPCOLOR.ORANGE,
                                    opacity: 1,
                                });
                        router.replace("/(auth)/login");
        }else{
            Toast.show(res.message as string,{
                                    duration: Toast.durations.LONG,
                                    textColor: "white",
                                    backgroundColor:APPCOLOR.ORANGE,
                                    opacity: 1,
                                });
        }
    }
    useEffect(() => {
        if(code && code.length === 6){
            verifyCode();
        }
    },[code])
        const handleResendCode = async() => {
                otpRef.current?.clear();
                const res = await resendCodeAPI(email as string);
                const m = res.data ? "Resend code successfully" : res.message;
                Toast.show(m,{
                    duration: Toast.durations.LONG,
                    textColor: "white",
                    backgroundColor:APPCOLOR.ORANGE,
                    opacity: 1,
                });
        }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.heading}>Xác thực tài khoản</Text>
                <Text style={{marginVertical: 10}}>Vui lòng nhập mã xác thực được gửi đến email của bạn</Text>
                <View style={{marginVertical: 10}}>
                    <OTPTextView
                        ref={otpRef}
                        handleTextChange={setCode}
                        autoFocus
                        inputCount={6}
                        inputCellLength={1}
                        tintColor={APPCOLOR.ORANGE}
                        textInputStyle={{
                            borderColor: APPCOLOR.GREY,
                            borderWidth: 1,
                            borderRadius: 5,
                            borderBottomWidth: 1
                        }}
                    />
                </View>
                <View style={{flexDirection: "row",marginVertical: 10}}>
                    <Text>Không nhận được mã xác nhận. </Text>
                    <Text 
                    onPress={handleResendCode}
                    style={{textDecorationLine: "underline"}}>Gửi lại</Text>
                </View>
            </View>
            {isSubmit && <LoadingOverlay/>}
        </>
    )
}

export default VerifyPage;