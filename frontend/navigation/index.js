import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/bottom-tabs/home-screen';
import { MessageScreen } from '../screens/bottom-tabs/message-writer';

const Tab = createBottomTabNavigator();

export function MyTabs() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="MessageScreen" component={MessageScreen} />
      </Tab.Navigator>
    );
  }