import React from 'react';
import {View} from 'react-native-ui-lib';
import Icon from 'react-native-vector-icons';
import {colors} from '../config/styles';

export function CustomBack(props: {tintColor: string; title?: string | null}) {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0,0.55)',
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        transform: [
          {
            scaleX: 0.8,
          },
          {
            scaleY: 0.8,
          },
        ],
      }}>
      <Icon
        reverse
        name="chevron-back-circle"
        type="ionicon"
        color={colors.primary}
      />
    </View>
  );
}
