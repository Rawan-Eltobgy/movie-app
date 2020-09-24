import React from 'react';
import {Text, View} from 'react-native-ui-lib';

import ListView from '../../../components/ListView';
import helpers from '../../../utils/helpers';
import MovieListItem from './MovieListItem';

type MovieListProps = {
  data?: Array<Object>;
};

function MovieList({data}: MovieListProps) {
  return (
    <View>
      {data ? (
        <ListView
          data={data}
          title="Creator Selected Movies"
          onViewAllPress={() => {}}
          keyExtractor={() => helpers.generateShortId()}
          subtitle="You can customize yours"
          renderItem={({item}) => <MovieListItem movie={item} />}
        />
      ) : (
        <View flex center margin-60>
        <Text>No results found !</Text>
        </View>
      )}
    </View>
  );
}

export default MovieList;
