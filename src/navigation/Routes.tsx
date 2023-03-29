import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './naviTypes';
import {Main} from '../screens/Main';
import {CurrentFilm} from '../screens/CurrentFilm';
import {Favorites} from '../screens/Favorites';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="CurrentFilm" component={CurrentFilm} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
};
