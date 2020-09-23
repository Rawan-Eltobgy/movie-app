import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {TextField, View, Text} from 'react-native-ui-lib';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
  const {navigate} = useNavigation();
  // const {Title, Poster, Released} = movie.movie;
  const realeaseYear = movie.Released.split(' ')[2];

  return (
    <View style={styles.movieItemView}>
      <TouchableOpacity
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigate('MovieDetails', {
            movieDetails: movie,
          });
        }}>
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
