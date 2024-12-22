import { HomeStack } from './navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}
