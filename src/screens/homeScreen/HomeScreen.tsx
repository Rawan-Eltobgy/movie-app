import React, {useState} from 'react';
import {TextField, View} from 'react-native-ui-lib';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from 'react-navigation-hooks';
import {useDispatch} from 'react-redux';
import fakeData from './fakeData.json';

import Icon from 'react-native-vector-icons';
import {colors} from '../../config/styles';
import MovieList from './components/MovieList';
import {fetchMovies} from '../../redux/modules/movies/actionTypes';

function HomeScreen() {
  const [movieName, setMovieName] = useState('');

  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const onTyping = (movieCurrentName: React.SetStateAction<string>) => {
    setMovieName(movieCurrentName);
  };

  const onSearch = () => {
    if (movieName.length > 2) {
      dispatch(fetchMovies({inputValue: movieName}));
      navigate('SearchResults');
    }
  };

  return (
    <View marginH-15 marginV-50 flex>
      <TouchableOpacity
        style={[styles.searchView, styles.shadowInput, styles.roundedInput]}>
        <TextField
          style={styles.inputStyle}
          placeholder="Search movies, series, or any title in mind !"
          underlineColorAndroid="transparent"
          enableErrors={false}
          hideUnderline
          placeholderTextColor="#bbb"
          onChangeText={(event: any) => {
            onTyping(event);
          }}
          onSubmitEditing={onSearch}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
        {/* <Icon
          containerStyle={styles.itemIcon}
          color={colors.yellow}
          size={22}
          name="search"
          type="evilIcons"
        /> */}
      </TouchableOpacity>
      <MovieList data={fakeData} />
    </View>
  );
}
const styles = StyleSheet.create({
  searchView: {
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 20,
    borderColor: colors.darkGrey,
    height: 45,
  },
  shadowInput: {
    height: 44,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.07)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 30,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ffffff',
    elevation: 2,
  },
  roundedInput: {
    borderRadius: 35,
  },
  inputStyle: {
    height: 45,
    paddingVertical: 6,
    paddingHorizontal: 10,
    color: colors.secondary,
    fontSize: 13,
    lineHeight: undefined,
    textAlignVertical: 'center',
  },
  itemIcon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 15,
  },
});

export default HomeScreen;
