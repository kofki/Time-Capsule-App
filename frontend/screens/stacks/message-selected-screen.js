import { SafeAreaView } from "react-native-safe-area-context";
import { CompleteMessage } from "../../components/feed/complete-message";

export const MessageSelectedScreen = ({navigation, route}) => {
    return (
        <SafeAreaView>
            <CompleteMessage data={route.params.data}/>
        </SafeAreaView>
    );
}