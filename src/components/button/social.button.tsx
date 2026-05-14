import { Text, View ,StyleSheet, ImageBackground, Image} from "react-native"
import ShareButton from "components/button/share.button"
import { APPCOLOR } from "utils/constain"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import TextBetweenLine from "./text.between.line";
import fbLogo from '@/assets/auth/facebook.png';
import ggLogo from '@/assets/auth/google.png';

const styles = StyleSheet.create({
    welcomBtn: {
        flex: 1,
        gap: 30,
 }})
 interface Iprops {
    title?: string;
}
const SocialButton = (props: Iprops) => {
    const {title} = props;
    return (
        <View style={styles.welcomBtn}>
            <TextBetweenLine 
            textColor="black"
            title={title || ''} />
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
                </View>
    )
}

export default SocialButton