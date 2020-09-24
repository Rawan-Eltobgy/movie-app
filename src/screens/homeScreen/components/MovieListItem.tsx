import React, {useState, useEffect} from 'react';
import {Alert, Image, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';
import {useNavigation} from 'react-navigation-hooks';
import {TextField, View, Text} from 'react-native-ui-lib';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import settings from '../../../config/env/staging';

interface IsMovie {
  Title: string;
  Poster?: string;
  Year?: string;
}

function MovieListItem({movie}: Object) {
  const {navigate} = useNavigation();


  fetchMovieDetails = () => {
    axios
      .get(
        `${settings.MOVIES_BASE_URL}?t=${movie.Title}&apikey=${settings.OMDb_API_KEY}`,
      )
      .then(
        (response: {data: React.SetStateAction<{}>}) => {
          console.log(response.data);
          console.log("why here")
          navigate('MovieDetails', {
            movieDetails: response.data,
          });
        },
        (error: any) => {
          Alert.alert('An Error Happened', {error}, {cancelable: true});
        },
      );
  };

  return (
    <View style={styles.movieItemView}>
      <TouchableOpacity onPress={fetchMovieDetails}>
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
            <Text small>{movie.Year}</Text>
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
