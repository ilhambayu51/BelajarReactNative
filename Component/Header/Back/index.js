import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeaderBack() {
  return (
    <View style={Styles.header}>
      <Icon name="angle-left" size={22} />
    </View>
  );
}

const Styles = StyleSheet.create({
  icon6: {
    color: '#2E26D9',
    right: '15%',
  },
});
