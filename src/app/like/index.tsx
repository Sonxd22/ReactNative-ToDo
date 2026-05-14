import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

    const Like = () =>{
        const navigation:any = useNavigation(); 
    return(
    <View>
        <Text>like</Text>
        <Button 
                onPress={()=>navigation.navigate("LikeDetail")}
                title="GO To LikeDetail"/>
    </View>
    )
}
export default Like;