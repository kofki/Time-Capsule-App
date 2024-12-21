import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Time Capsule App</Text>
      <Text>{Platform.OS == 'ios' ? 'ios' : 'android'}</Text>
    </SafeAreaView>
  );
}
