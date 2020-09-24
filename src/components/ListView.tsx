import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

import {colors} from '../config/styles';

type ListViewProps = {
  data: Array<Object>;
  title?: string;
  subtitle?: string;
  renderItem: (data: any) => any;
  keyExtractor: (data: any) => any;
  onViewAllPress?: (data: any) => any;
  searchResults?: boolean;
};

const ListView = ({
  data,
  title,
  subtitle,
  renderItem,
  keyExtractor,
  onViewAllPress,
  searchResults,
}: ListViewProps) => {
  return (
    <View marginV-20>
      <View row center paddingH-16>
        <View flex>
          <Text style={styles.titleText}>{title}</Text>
          {subtitle && <Text>{subtitle}</Text>}
        </View>
        {onViewAllPress && (
          <View>
            <TouchableOpacity
              onPress={onViewAllPress}
              style={{paddingVertical: 5}}>
              <Text style={styles.subText}>View all</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {searchResults ? (
        <FlatList
          data={data}
          numColumns={3}
          renderItem={renderItem}
          style={{marginTop: 10}}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.containerContentStyle}
          ItemSeparatorComponent={() => <View marginH-15 />}
        />
      ) : (
        <FlatList
          data={data}
          horizontal
          renderItem={renderItem}
          style={{marginTop: 10}}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.containerContentStyle}
          ItemSeparatorComponent={() => <View marginH-15 />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  containerContentStyle: {
    paddingLeft: 16,
    paddingRight: 6,
  },
  subText: {
    color: colors.primary,
    fontSize: 15,
  },
});

export default ListView;
