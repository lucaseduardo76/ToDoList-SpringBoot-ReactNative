import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Login } from './components/login';
import { Home } from './components/home';
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './navigators/MainStack';

export default function App() {
  return (
    <NavigationContainer >
      <MainStack />

    </NavigationContainer>
  );
}


