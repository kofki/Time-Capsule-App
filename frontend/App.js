import { useState, useEffect } from 'react';
import { MyTabs } from './navigation/index';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async() =>({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export default function App() {
  useEffect(() =>{
    const registerForPushNotifications = async() =>{
      if (Platform.OS === 'android'){
        await Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
        });
      }
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted'){
        alert('No notification permissions')
      }
    };
    registerForPushNotifications();
  }, []);

  return (
    <MyTabs/>
  );  
}
