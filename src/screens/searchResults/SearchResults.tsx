import React from 'react';
import {StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

import ListView from '../../components/ListView';
import MovieListItem from '../../screens/homeScreen/components/MovieListItem';
import helpers from '../../utils/helpers';
import fakeData from '../homeScreen/fakeData.json';


export const SearchResults = () => {
  return (
    <View marginH-15 marginV-50 flex>
      <ListView
        data={fakeData}
        onViewAllPress={() => {}}
        keyExtractor={() => helpers.generateShortId()}
        renderItem={({item}) => <MovieListItem movie={item} />}
      />
    </View>
  );
};
