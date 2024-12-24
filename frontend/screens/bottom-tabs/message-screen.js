import { Text } from 'react-native'
import MessageList from '../../components/messages/message-list'
import { SafeAreaView } from 'react-native-safe-area-context';
export const MessageScreen = ()=> {
    return (
        <SafeAreaView>
            <MessageList/>
        </SafeAreaView>
        
    );
}