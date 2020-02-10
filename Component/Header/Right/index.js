import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeaderRight() {
  return (
    <View style={Styles.header}>
      <Icon name="navicon" size={18} />
    </View>
  );
}

const Styles = StyleSheet.create({
  icon6: {
    color: '#2E26D9',
    right: '15%',
  },
});
