/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Overview from './src/screens/Overview';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import {store} from './src/redux/store'

const Stack=createStackNavigator();

function App() {

  StatusBar.setBackgroundColor('white')

  return (
    <Provider store={store}>
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Overview' component={Overview}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
}


export default App;
