import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageWriter } from '../../components/messages/message-writer';

export const MessageScreen = ()=> {
    return(
        <SafeAreaView>
            <MessageWriter/>
        </SafeAreaView>
    );
}
