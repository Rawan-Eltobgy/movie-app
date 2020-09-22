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

import {NavigationContainer} from '@react-navigation/native';

import {AppContainer} from './src/router';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <NavigationContainer>{
      <AppContainer />
    }
    </NavigationContainer>
  );
};


export default App;
