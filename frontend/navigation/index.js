import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/bottom-tabs/home-screen';
import { NavigationContainer } from '@react-navigation/native';
import { MessageScreen } from '../screens/bottom-tabs/message-writer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigation(){
    function MyStack(){
        return (
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={MyTabs}/>
            </Stack.Navigator>
        );
    }
    function MyTabs(){
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Message" component={MessageScreen}/>
        </Tab.Navigator>
    }
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}