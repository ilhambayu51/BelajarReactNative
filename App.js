/* eslint-disable no-unused-vars */
import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
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
            <Icon2 style={[{color: tintColor}]} size={25} name={'md-home'} />
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
            <Icon3
              style={[{color: tintColor}]}
              size={25}
              name={'briefcase-outline'}
            />
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
            <Icon2
              style={[{color: tintColor}]}
              size={25}
              name={'ios-notifications-outline'}
            />
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
            <Icon style={[{color: tintColor}]} size={25} name={'user-o'} />
          </View>
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#2E26D9',
    inactiveColor: '#000000',
    barStyle: {backgroundColor: '#fff'},
  },
);

export default createAppContainer(TabNavigator);
