import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {DrawerNavigationComponent} from './src/navigation/DrawerRoutes';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
        <DrawerNavigationComponent />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
