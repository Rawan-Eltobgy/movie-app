import React, {useEffect, useRef} from 'react';
import {View, Text} from 'react-native-ui-lib';
import {Animated, StyleSheet, FlatList,ScrollView, Dimensions} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';

import MovieTags from './components/MovieTags';
import {colors} from '../../config/styles';
import {height, width} from '../../utils/helpers';

function MovieDetails() {
  const movie = useNavigationParam('movieDetails');
  const fadeAnim = useRef(new Animated.Value(0)).current;
  // useEffect(() => {
  //   fadeIn();
  //   // return () => {
  //   // }
  // },)
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
    }).start();
  };

  const realeaseYear = movie.Released.split(' ')[2];
  const movieGenres = movie.Genre.split(',');
  const actors = movie.Actors.split(',');

  const renderHorizontalMargin = () => {
    return (
      <View
        style={{
          height: 3,
          width: '100%',
          backgroundColor: colors.primary,
        }}
      />
    );
  };

  return (
    <ScrollView>
    <View flex marginH-25 marginT-50>
      <View style={{overflow: 'scroll'}}>
        <Animated.Image
          onLoadEnd={() => fadeIn()}
          source={{uri: `${movie.Poster}`}}
          style={[
            styles.posterView,
            {
              opacity: fadeAnim,
              overflow: 'hidden',
            },
          ]}
        />
        <View margin-10 style={styles.titleView}>
          <Text style={styles.titleTxt}>{movie.Title.trim()}</Text>
          {/*To fix the added line issue */}
          <Text style={styles.releaseTxt}>{`(${realeaseYear})`}</Text>
        </View>
        <MovieTags tags={movieGenres} />
        {renderHorizontalMargin()}
        <FlatList
          data={movie.Ratings}
          renderItem={({item, index}) => (
            <View flex row marginH-10 style={styles.ratingItem}>
              <View flex center column>
                <Text> {item.Value}</Text>
                <Text> {item.Source}</Text>
              </View>
              {index + 1 !== movie.Ratings.length && (
                <View
                  style={{
                    height: 100,
                    width: 5,
                    backgroundColor: colors.primary,
                    marginHorizontal: 15,
                  }}
                />
              )}
            </View>
          )}
          columnWrapperStyle={styles.ratingRow}
          numColumns={3}
          // keyExtractor={(item, index) => index}
        />
        {renderHorizontalMargin()}
        <View style={styles.plot}>
          <Text style={styles.plotTxt}>{movie.Plot}</Text>
        </View>
        <Text style={styles.subTxt}> Cast </Text>
        <View style={styles.plot}>
          <Text style={styles.plotTxt}>{movie.Actors}</Text>
        </View>
        <Text style={styles.subTxt}> Directed By </Text>
        <View style={styles.plot}>
          <Text style={styles.plotTxt}>{movie.Director}</Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  ratingRow: {
    backgroundColor: colors.disabled,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  ratingItem: {
    flex: 0.33,
    // minWidth: (width - 50) / 3,
    // maxWidth: (width - 50) / 3,
  },
  plot: {
    backgroundColor: colors.disabled,
    padding: 20,
    borderRadius: 25,
    marginVertical: 15,
  },
  plotTxt: {
    fontSize: 20,
  },
  titleTxt: {
    fontWeight: 'bold',
    fontSize: 30,
    color: colors.primary,
  },
  subTxt: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.primary,
  },
  titleView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  releaseTxt: {
    fontWeight: 'bold',
    fontSize: 25,
    color: colors.darkGrey,
  },
  posterView: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    resizeMode: 'contain',
  },
});
export default MovieDetails;
