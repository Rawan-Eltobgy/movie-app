import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import MovieDetails from '../screens/movieDetails/MovieDetails';
import SearchResults from '../screens/searchResults/SearchResults';
import {CustomBack} from './CustomBack';
import {colors} from '../config/styles';

const MainNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    SearchResults: {
      screen: SearchResults,
    },
    MovieDetails: {
      screen: MovieDetails,
    },
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTitle: '',
      // headerBackImage: CustomBack,
      headerTruncatedBackTitle: '',
      headerStyle: {
        height: 60,
        backgroundColor: 'transparent',
      },
    },
  },
);

export const AppContainer = createAppContainer(MainNavigator);
