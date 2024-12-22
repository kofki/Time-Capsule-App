import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home-screen';
import { MessageScreen } from '../screens/message-writer';

const Stack = createNativeStackNavigator();

export const HomeStack = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="MessageWriter" component={MessageScreen}/>
        </Stack.Navigator>
    );
}