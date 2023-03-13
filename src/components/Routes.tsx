import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigations/naviTypes';
import {Main} from '../screens/Main';
import {CurrentFilm} from '../screens/CurrentFilm';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="CurrentFilm" component={CurrentFilm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
