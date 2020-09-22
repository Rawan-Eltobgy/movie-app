import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Text, View} from 'react-native-ui-lib';

const MovieTags = ({tags}) => {
  let loading = false;
  const _renderItem = ({tag, index}) => {
    
    return (
      <View
        style={styles.tag}>
        <Text bold mLeft={10}>
          {tag}
        </Text>
      </View>
    );
  };

  const getKey = (item) => {
    //TODO: add loading
    return helpers.generateShortId();
  };

  return (
    <FlatList
      data={loading ? ['', '', ''] : data}
      keyExtractor={getKey}
      renderItem={_renderItem}
      contentContainerStyle={styles.container}
      style={styles.list}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  list: {
    marginTop: 20,
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 20,
  },
});

export default MovieTags;
