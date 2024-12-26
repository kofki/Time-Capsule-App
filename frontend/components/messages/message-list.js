import { View, Text, FlatList } from 'react-native';
import MessageItem from './message-item';

function MessageList({data}){
    function renderItem({item}){
        return <MessageItem data={item}/>
    }
    return (
        <View>
           <FlatList 
           data={data} 
           keyExtractor={item=> item.id}  
           renderItem={renderItem}
           />
        </View>
    );
}

export default MessageList;