import React, {useState} from 'react';
import {TextArea, TextField, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons';

import {colors} from '../../config/styles';

function HomeScreen() {
  const [movieName, setMovieName] = useState('');

  onSearch = (event) => {
    setMovieName(event.nativeEvent.text);
    // {
    //   movieName && this.props.search({
    //     'name': movieName,
    //   });
    // }
  };

  return (
    <View>
      {/* <TextField
            style={styles.homeText}
            placeholder={translate('searchTitle')}
            placeholderTextColor='#bbb'
            onChange={(event) => {
              this.onSearch(event);
            }}
            returnKeyType='search'
            onSubmitEditing={helpers.pushScreen(componentId, 'blak.SearchResult', {searchData, form})}
            clearButtonMode="while-editing"
      /> */}
      <View>
        <TextField
          style={(styles.shadowInput, styles.roundedInput)}
          underlineColorAndroid="transparent"
          enableErrors={false}
          hideUnderline
          placeholder="Search"
        />
        <Icon
          containerStyle={styles.itemIcon}
          color={colors.yellow}
          size={22}
          name="search"
          type="evilIcons"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    paddingHorizontal: 6,
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
