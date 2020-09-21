import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {TextField, View, Text} from 'react-native-ui-lib';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

// type MovieProps = {
//   Title: string;
//   Year: string;
//   Rated: string;
//   Ratings?: Array<object>;
//   Released: string;
//   Runtime: string;
//   Genre: string;
//   Poster: string;
// };

function MovieListItem({movie}) {
  // const {Title, Poster, Released} = movie.movie;
  const realeaseYear = movie.Released.split(' ')[2];

  return (
    <View style={styles.movieItemView}>
      <TouchableOpacity>
        <View>
          <Image
            style={styles.posterView}
            source={{uri: `${movie.Poster}`}}
            resizeMode="stretch"
          />
          <View
            style={{paddingHorizontal: 5, alignItems: 'center', marginTop: 8}}>
            <Text small bold numberOfLines={1}>
              {movie.Title}
            </Text>
            <Text small>{realeaseYear}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  movieItemView: {
    width: 130,
  },
  posterView: {
    width: 120,
    height: 170,
    borderRadius: 5,
  },
});

export default MovieListItem;
