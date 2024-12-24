import {View, Text, TouchableOpacity} from 'react-native';

function MessageItem({id, title, message}){
    return (
        <TouchableOpacity onPress={()=>{}}>
            <Text>{title}</Text>
            <Text>{message}</Text>
        </TouchableOpacity>
    );
}

export default MessageItem;