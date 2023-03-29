import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {CustomDrawer} from './CustomDrawer';
import {Routes} from './Routes';
import {RootDrawerParamList} from './naviTypes';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const DrawerNavigationComponent = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Routes" component={Routes} />
    </Drawer.Navigator>
  );
};
