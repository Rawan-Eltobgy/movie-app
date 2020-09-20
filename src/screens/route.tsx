/**
 * Created by atallah on 5/22/19.
 */
import {colors} from '../config/styles';

export default () => {
  return {
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'moviesApp.Home',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Home',
                  textColor: colors.tabsTextColor,
                  selectedTextColor: colors.primary,
                  titleDisplayMode: 'alwaysShow',
                  // icon: require('../assets/images/home.png'),
                  selectedIconColor: colors.primary,
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'moviesApp.MovieSearch',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Search',
                  textColor: colors.tabsTextColor,
                  selectedTextColor: colors.primary,
                  titleDisplayMode: 'alwaysShow',
                  // icon: require('../assets/images/home.png'),
                  selectedIconColor: colors.primary,
                },
              },
            },
          },
        ],
        options: {
          bottomTabs: {
            currentTabIndex: 0,
            titleDisplayMode: 'alwaysShow',
            textColor: colors.tabsTextColor,
            selectedTextColor: colors.primary,
            selectedIconColor: colors.primary,
          },
          layout: {
            backgroundColor: 'white',
            orientation: ['portrait'], // An array of supported orientations
          },
          forceTitlesDisplay: true,
        },
      },
    },
  };
};
