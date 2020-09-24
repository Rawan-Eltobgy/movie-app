import React from 'react';
import {View,Text} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';

import ListView from '../../components/ListView';
import MovieListItem from '../../screens/homeScreen/components/MovieListItem';
import helpers from '../../utils/helpers';

function SearchResults() {
  const resultMovies = useSelector((state) => state.movies.movies);

  return (
    <View marginH-15 marginV-50 flex>
      {resultMovies ? (
        <ListView
          searchResults
          data={resultMovies}
          keyExtractor={() => helpers.generateShortId()}
          renderItem={({item}) => <MovieListItem movie={item} />}
        />
      ) : (
        <View flex center margin-60>
          <Text bold>No results found</Text>
        </View>
      )}
    </View>
  );
}
export default SearchResults;
