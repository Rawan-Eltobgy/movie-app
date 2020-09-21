import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import {TextField, View, Text} from 'react-native-ui-lib';


function MovieListItem( movie: { Poster: any; id?: any; Title?: string; Released?: any; } ) {
  const { id, Title, Poster, Released } = movie;

  return (
    <View>
      <TouchableOpacity>
        <Image
          style={styles.posterView}
          source={movie.Poster}
          resizeMode="stretch"
        />
        <View
          style={{ paddingHorizontal: 5, alignItems: 'center', marginTop: 8 }}
        >
          <Text small bold numberOfLines={1}>
            {Title}
          </Text>
          <Text small>{Released}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  posterView: {
    width: 120,
    height: 170, 
    borderRadius: 5
  },
)}

export default MovieListItem;
