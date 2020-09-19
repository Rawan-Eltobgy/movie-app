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
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';

import route from './src/screens/route';
import {registerScreens} from './src/screens';

import store from './src/redux';

declare const global: {HermesInternal: null | {}};

const App = () => {
  registerScreens(store, Provider);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot(route());
  });
};

export default App;
