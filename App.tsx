/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {AppContainer} from './src/router';
import store from './src/redux';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>{<AppContainer />}</NavigationContainer>
    </Provider>
  );
};

export default App;
