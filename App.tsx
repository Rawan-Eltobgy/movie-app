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
console.log('store: ', store);
const App = () => {
  return (
    <NavigationContainer>
      {
        <Provider store={store}>
          <AppContainer />
        </Provider>
      }
    </NavigationContainer>
  );
};

export default App;
