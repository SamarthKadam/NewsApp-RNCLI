/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Overview from './src/screens/Overview';
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import {store} from './src/redux/store'
import { AllNews } from './src/helper/Api';
import Search from './src/screens/Search';
import MoreStuff from './src/screens/MoreStuff';
const Stack=createStackNavigator();

function App() {

  StatusBar.setBackgroundColor('white')

  return (
    <Provider store={store}>
    <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false,presentation:"modal"}}>
        <Stack.Screen  name='Home' component={Home}></Stack.Screen>
        <Stack.Screen options={{headerShown:true,headerTintColor:'black',headerBackTitleStyle:{color:'green'}}} name='Overview' component={Overview}></Stack.Screen>
        <Stack.Screen options={{headerShown:true,headerTintColor:'black'}} name='Search' component={Search}></Stack.Screen>
        <Stack.Screen options={{headerShown:true,headerTintColor:'black'}} name='More' component={MoreStuff}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </Provider>
  );
}


export default App;
