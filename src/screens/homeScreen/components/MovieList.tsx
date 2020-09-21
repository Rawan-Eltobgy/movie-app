import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';


import ListView from '../../../components/ListView';
import MovieListItem from './MovieListItem';

function MovieList({data}: any) {
  console.log("AllMovies: ",data);
  return (
    <ListView
      data={data}
      title="Creator Selected Movies"
      onViewAllPress={() => {}}
      keyExtractor={(item, index) => index.toString()}
      subtitle="You can customize yours"
      renderItem={({item}) => <MovieListItem movie={item} />}
    />
  );
}

export default MovieList;
