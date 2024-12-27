import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const WeeklyReportScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <Button title="Go Back" onPress={()=> navigation.goBack()}/>
            <Text>test</Text>
        </SafeAreaView>
    );
}