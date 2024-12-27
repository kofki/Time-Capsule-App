import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/bottom-tabs/home-screen';
import { MessageScreen } from '../screens/bottom-tabs/message-screen';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { MessageSelectedScreen } from '../screens/stacks/message-selected-screen';
import { MessageTypeSelectorScreen } from '../screens/bottom-tabs/time-capsule-selector-screen';
import { useCallback } from 'react';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeScreen" component={HomeStack} options={{popToTopOnBlur: true}}/>
            <Tab.Screen name="MessageScreen" component={MessageStack} options={{popToTopOnBlur: true}}/>
        </Tab.Navigator>
    </NavigationContainer>
    );
}

const Stack = createStackNavigator();
function HomeStack() {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="MessageSelected" component={MessageSelectedScreen}/>
            </Stack.Navigator>
    );
}

function MessageStack(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="MessageSelector" component={MessageTypeSelectorScreen}/>
            <Stack.Screen name="MessageWriterScreen" component={MessageScreen}/>
        </Stack.Navigator>
    );
}