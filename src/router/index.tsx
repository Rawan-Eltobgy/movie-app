import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import MovieDetails from '../screens/movieDetails/MovieDetails';
import {createAppContainer} from 'react-navigation';
import {CustomBack} from './CustomBack';
import { colors } from '../config/styles';

const MainNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      
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
);;

export const AppContainer = createAppContainer(MainNavigator);
