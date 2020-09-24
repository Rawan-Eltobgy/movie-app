
# Movies App using *React-Native (ts)* , *redux-saga* , *react-navigation*

* React-Native app built using [React-native](https://reactnative.dev/).
* [react-native-ui-lib](https://github.com/wix/react-native-ui-lib) inorder to make use of the modifiers.
* [react-navigation](https://reactnavigation.org/).
* Redux /[Redux-Saga](https://redux-saga.js.org/) to handle the global state of the app and manage async operations.
* [Axios](https://github.com/axios/axios) for fetching data in MovieDetails -did not store it in redux as it is not needed anywhere else in the application - .
* For  Movies API: [OMDb](http://www.omdbapi.com/).

## Installation And Running

1. `yarn install or npm install`
1. `react-native start`
1. `react-native run-android`

## For running tests

## Around the app tour
**The app consists of three screens:**
* HomeScreen Screen-> contains a search bar and a dummy data for movies (would be re-styled later on).
* MovieDetails Screen -> shows film details: poster, title, genres, director, plot, cast and ratings. Include a back button in the navigation bar.
* SearchResults Screen -> contains the resulted from the search movies with a poster, title, year for each movie item.

## License
[MIT](https://choosealicense.com/licenses/mit/)