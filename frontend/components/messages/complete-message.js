import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

export const CompleteMessage = ({data}) =>{
    const navigation = useNavigation();
    const date = new Date(data.date_sent);
    return (
        <View>
            <Button title="goBack" onPress={()=>{navigation.goBack()}}/>
            <Text>
                {data.title}
            </Text>
            <Text>
                {data.message}
            </Text>
            <Text>
                {date.toDateString()}
            </Text>
        </View>
    );
}