/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Home from './src/containers/home';
import Forecasts from './src/containers/forecasts';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './rootNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Forecasts" component={Forecasts} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
