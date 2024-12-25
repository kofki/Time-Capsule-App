import { View, Text, FlatList } from 'react-native';
import MessageItem from './message-item';

function MessageList({data}){
    console.log(data);
    function renderItem({item}){
        return <MessageItem id={item.id} title={item.title} message={item.message}/>
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