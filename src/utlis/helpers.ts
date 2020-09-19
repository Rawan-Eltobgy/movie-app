import {
  Linking,
  Platform,
  Dimensions,
  I18nManager,
  NativeModules,
} from 'react-native';
import React from 'react';
import DeviceInfo from 'react-native-device-info';


const {height, width} = Dimensions.get('window');

const helpers = {
  isIphoneX: () => {
    const deviceModel = DeviceInfo.getModel();

    return (
      deviceModel === 'iPhone X' ||
      (Platform.OS === 'ios' &&
        !Platform.isPad &&
        !Platform.isTVOS &&
        (height === 812 ||
          width === 812 ||
          height === 896 || width === 896)))
    );
  },
};

export default helpers;
