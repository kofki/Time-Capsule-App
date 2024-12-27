import { useNavigation } from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

function MessageItem({ data }){
    const date = new Date(data.date_sent);
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>{navigation.navigate("MessageSelected", {data: data})}}>
            <Text>{data.title}</Text>
            <Text>Date Sent: {date.toDateString()}</Text>
        </TouchableOpacity>
    );
}

export default MessageItem;