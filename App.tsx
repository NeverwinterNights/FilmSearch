import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {StatusBar} from 'react-native';
import {Routes} from './src/components/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Routes />
    </Provider>
  );
};

export default App;
