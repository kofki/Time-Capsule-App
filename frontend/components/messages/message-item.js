import {View, Text, TouchableOpacity} from 'react-native';

function MessageItem({id, title, description}){
    return (
        <TouchableOpacity onPress={()=>{}}>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </TouchableOpacity>
    );
}

export default MessageItem;