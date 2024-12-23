import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <Button title="Record" onPress={()=>navigation.navigate('MessageWriter')}/>
        </View>
    );
}