import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/bottom-tabs/home-screen';
import { MessageScreen } from '../screens/bottom-tabs/message-screen';
import { NavigationContainer } from '@react-navigation/native';
import { MessageSelectedScreen } from '../screens/stacks/message-selected-screen';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeScreen" component={MyStack} />
            <Tab.Screen name="MessageScreen" component={MessageScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}

const Stack = createStackNavigator();
function MyStack() {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="MessageSelected" component={MessageSelectedScreen}/>
            </Stack.Navigator>
    );
}