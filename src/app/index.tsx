import React from "react"
import { Text, View ,StyleSheet, ImageBackground, Image} from "react-native"
import ShareButton from "components/button/share.button"
import { APPCOLOR } from "utils/constain"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import pg from '@/assets/auth/welcome-background.png';
//import fbLogo from '@/assets/auth/facebook.png';//
//import ggLogo from '@/assets/auth/google.png';//
import fbLogo from '../assets/auth/facebook.png';
import ggLogo from '../assets/auth/google.png';
import { LinearGradient } from "expo-linear-gradient";
import TextBetweenLine from "@/components/button/text.between.line";
import { Link, Redirect,router,Router } from 'expo-router';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal : 10
    },
    welcomeText: {
        flex: 0.6,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20
    },
    welcomBtn: {
        flex: 0.4,
        gap: 30,
    },
    heading:{
        fontSize: 30,
        fontWeight: '600',
    },
    body:{
        fontSize: 30,
        color: APPCOLOR.ORANGE,
        marginVertical: 10,
    },
    footer:{

    },
    
})
const WelcomePage = () => {
    // if(true){
    //     return(
    //         <Redirect href={"/(auth)/signup"} />
    //     )
    // }
    return(
        <ImageBackground 
        style={{flex:1}}
        source={pg}
        >
            <LinearGradient
               style={{flex:1}}
               colors={['transparent', '#191B2F']}
               locations={[0.2, 0.8]}
>
    <View style={styles.container}>
        <View style={styles.welcomeText}>
            <Text style={styles.heading}>
                Welcome to 
                </Text>
            <Text style={styles.body}>
                @App!
            </Text>
            <Text style={styles.footer}>
                Nền tảng giao hàng trực tuyến hàng đầu Việt Nam
            </Text>
        </View>
        <View style={styles.welcomBtn}>
        {/* { <View style={{
            borderBottomColor: "red",
            borderBottomWidth: 1,
            marginHorizontal: 50,
        }}>
            <Text style={{
                padding : 10,
                textAlign : "center",
                backgroundColor : "white",
                alignSelf : "center",
                position : "relative",
                top : 20, }
            }}>Đăng nhập với</Text>
        </View>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 30, */}
            <TextBetweenLine title="Đăng nhập với" />
            <View style={{
                flexDirection: 'row',
            justifyContent: 'center',
            gap: 30,
        }}>
            <ShareButton
            title="Facebook"
            onPress={() => {alert('Facebook Pressed')}}
            textStyle={{textTransform: 'uppercase'}}
            btnStyle={{justifyContent: 'center',borderRadius:30,backgroundColor:'#fff'}}
            icon={<Image source={fbLogo}/>}
            />
           
            <ShareButton
            title="Google"
            onPress={() => {alert('Google Pressed')}}
            textStyle={{textTransform: 'uppercase'}}
            btnStyle={{justifyContent: 'center',borderRadius:50,backgroundColor:'#fff',paddingHorizontal:20}}
            icon={<Image source={ggLogo} />}
            />
        </View>
                <View>
                    <ShareButton
            title="Đăng nhập với email" 
            onPress={() => {router.navigate("/(auth)/login")}}
            textStyle={{color:"#fff",paddingVertical:5}}
            btnStyle={{justifyContent: 'center',
                borderRadius:30,
                backgroundColor:'#2c2c2c',
                paddingVertical:10,
                paddingHorizontal:50,
                borderColor:"#505050",
                borderWidth:1,
            }}
            pressStyle={{alignSelf:"stretch"}}
            />
                </View>
                <View style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: 10,
                        }}>
                            <Text style={{ color: "#fff" }}>
                                Bạn chưa có tài khoản?
                            </Text>
                            <Link href={"/(auth)/signup"}> 
                            <Text style={{ color: "#fff", textDecorationLine: "underline" }}>
                                Đăng ký.
                            </Text>
                            </Link>
                        
                            
                        </View>
    </View>
    </View>
    </LinearGradient>
    </ImageBackground>
    )
}
export default WelcomePage;