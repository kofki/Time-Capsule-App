import { SafeAreaView } from "react-native-safe-area-context";
import { CompleteMessage } from "../../components/messages/complete-message";

export const MessageSelectedScreen = ({navigation, route}) => {
    return (
        <SafeAreaView>
            <CompleteMessage data={route.params.data}/>
        </SafeAreaView>
    );
}