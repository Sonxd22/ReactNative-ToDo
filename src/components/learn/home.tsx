import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

const Home = () =>{
    const navigation:any = useNavigation(); 
    return(
    <View>
        <Text>Home</Text>
        <Button 
        onPress={()=>navigation.navigate("HomeDetail")}
        title="GO To Detail"/>
    </View>
    )
}
export default Home;