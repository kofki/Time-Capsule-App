import { SafeAreaView } from 'react-native-safe-area-context';
import { MessageWriter } from '../../components/messages/message-writer';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export const MessageScreen = ({route})=> {
    const navigation = useNavigation()
    return(
        <SafeAreaView>
            <Button title="Go Back" onPress={()=>navigation.goBack()}/>
            <MessageWriter emotion={route.params.emotion}/>
        </SafeAreaView>
    );
}
