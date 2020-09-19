import React from 'react';
import {Navigation} from 'react-native-navigation';
import RootWrapper from './rootWrapper/rootWrapper';
import {Provider} from 'react-redux';
import { Home } from './home';
import { MovieDetails } from './movieDetails';
import { MovieSearch } from './searchResults';


function wrapWithContextProvider(Comp, screenName = '') {
  return (props) => {
    const {navigator} = props;

    return (
      <RootWrapper navigator={navigator} screenName={screenName}>
        <Comp {...props} />
      </RootWrapper>
    );
  };
}

/**
 * register all screens of the app (including internal ones)
 * @param store
 * @param provider
 */
export function registerScreens(store, provider) {
  Navigation.registerComponentWithRedux(
    'moviesApp.Home',
    () => wrapWithContextProvider(Home),
    provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'moviesApp.MovieDetails',
    () => wrapWithContextProvider(MovieDetails),
    provider,
    store,
  );
  Navigation.registerComponentWithRedux(
    'moviesApp.MovieSearch',
    () => wrapWithContextProvider(MovieSearch),
    provider,
    store,
  );
}
