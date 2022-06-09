/* eslint-disable eslint-comments/no-unlimited-disable */
/*eslint-disable*/

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Quiz, SelectLaunage } from '../screens';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SelectLaunage" component={SelectLaunage} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export default AppStackNavigator;
