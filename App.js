/* eslint-disable no-unused-vars */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  HomeStack,
  ProfilStack,
  TripStack,
  NotificationStack,
} from './router/stackNavigator';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      },
    },
    Trip: {
      screen: TripStack,
      navigationOptions: {
        tabBarLabel: 'Trip',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      },
    },
    Notification: {
      screen: NotificationStack,
      navigationOptions: {
        tabBarLabel: 'Notification',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'home'} />
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfilStack,
      navigationOptions: {
        tabBarLabel: 'Profil',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'user-alt'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#82D6EE',
    inactiveColor: '#d2d2d2',
    barStyle: {backgroundColor: '#fff'},
  },
);

export default createAppContainer(TabNavigator);
