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

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log('Expo Push Token: ', token);
    };

    registerForPushNotifications();


    const scheduleNotifications = async() => {
      await Notifications.cancelAllScheduledNotificationsAsync();
      
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "test 1",
          body: "test 1 message",
          sound: true,
        },
        trigger: {
          seconds: 1000,
        }
      });
    };

    scheduleNotifications();
    
    const notificationListener = Notifications.addNotificationReceivedListener(
      notification => {
        console.log("notification received: ", notification);
      }
    );

    const responseListener = Notifications.addNotificationResponseReceivedListener(
      response => {
        console.log("Notification interaction: ", response);
      }
    );

    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  return (
    <MyTabs/>
  );  
}
