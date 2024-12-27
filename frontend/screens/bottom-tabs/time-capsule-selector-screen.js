import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const MessageTypeSelectorScreen = () => {
    const navigation = useNavigation()
    const emotions = ["joy", "anger", "surprise", "sadness"]
    return (
        <SafeAreaView>
            {emotions.map((emotion, i)=>{
                return (
                    <Button title={emotion} key={i} onPress={()=>navigation.navigate("MessageWriterScreen", {emotion: emotion})}/>
                );
            })}
        </SafeAreaView>
    );
};