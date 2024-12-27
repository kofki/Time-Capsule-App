import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const MessageTypeSelectorScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <Button title="Select Message" onPress={()=>{navigation.navigate("MessageWriterScreen")}}/>
            <Button title="Select Report" onPress={()=>{navigation.navigate("ReportWriterScreen")}}/>
        </SafeAreaView>
    );
};