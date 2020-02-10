import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View style={styles.header}>
      <Icon name="angle-left" size={22} />
      <View style={styles.title}>
        <Icon2 name="food" size={18} color="#2E26D9" />
        <Text style={styles.text}>Restaurant</Text>
      </View>
      <Icon name="navicon" size={18} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '86%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginStart: '6%',
  },
  text: {
    fontSize: 17,
    color: 'black',
  },
  icon6: {
    color: '#2E26D9',
    right: '15%',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
