import React from 'react';
import {StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {View} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';

import ListView from '../../components/ListView';
import MovieListItem from '../../screens/homeScreen/components/MovieListItem';
import helpers from '../../utils/helpers';
import fakeData from '../homeScreen/fakeData.json';

function SearchResults() {
  const resultMovies = useSelector((state) => state.movies.movies);

  return (
    <View marginH-15 marginV-50 flex>
      <ListView
        searchResults
        data={resultMovies}
        keyExtractor={() => helpers.generateShortId()}
        renderItem={({item}) => <MovieListItem movie={item} />}
      />
    </View>
  );
}
export default SearchResults;
