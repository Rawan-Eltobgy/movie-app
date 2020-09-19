import React, {PureComponent} from 'react';
import {View, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

import helpers from '../../utlis/helpers';

class RootWrapper extends PureComponent {
  static navigatorStyle = {navBarHidden: true};

  static propTypes = {
    children: PropTypes.node,
    navigator: PropTypes.object,
  };

  render() {
    if (helpers.isIphoneX()) {
      return (
        <SafeAreaView style={{flex: 1}}>
          <View style={{flex: 1}}>{this.props.children}</View>
        </SafeAreaView>
      );
    }

    return <View style={{flex: 1}}>{this.props.children}</View>;
  }
}

export default RootWrapper;
