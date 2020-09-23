import React from 'react';

import ListView from '../../../components/ListView';
import helpers from '../../../utils/helpers';
import MovieListItem from './MovieListItem';

function MovieList({data}: any) {
  return (
    <ListView
      data={data}
      title="Creator Selected Movies"
      onViewAllPress={() => {}}
      keyExtractor={() => helpers.generateShortId()}
      subtitle="You can customize yours"
      renderItem={({item}) => <MovieListItem movie={item} />}
    />
  );
}

export default MovieList;
