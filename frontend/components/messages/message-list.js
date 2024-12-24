import { View, Text, FlatList } from 'react-native';
import { DUMMY_DATA } from '../../data/dummy';
import MessageItem from './message-item';

function MessageList(){
    function renderItem({item}){
        return <MessageItem id={item.id} title={item.title} description={item.description}/>
    }
    return (
        <View>
           <FlatList 
           data={DUMMY_DATA} 
           keyExtractor={item=> item.id}  
           renderItem={renderItem}
           />
        </View>
    );
}

export default MessageList;