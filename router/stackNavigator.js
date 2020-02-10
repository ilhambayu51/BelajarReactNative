import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screen/Home';
import Profil from '../screen/Profil';
import Trip from '../screen/Trip';
import Notification from '../screen/Notification';
import Restaurant from '../screen/Restaurant';
import Header from '../Component/Header';
import HeaderBack from '../Component/Header/Back';
import HeaderRight from '../Component/Header/Right';
import React from 'react';

export const ProfilStack = createStackNavigator({
  Profil: {
    screen: Profil,
    navigationOptions: {
      tabBarVisible: true,
    },
  },
});

export const TripStack = createStackNavigator({
  Trip: {
    screen: Trip,
    navigationOptions: {
      tabBarVisible: true,
    },
  },
});

export const NotificationStack = createStackNavigator({
  Notification: {
    screen: Notification,
    navigationOptions: {
      tabBarVisible: true,
    },
  },
});

export const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarVisible: true,
        header: null,
      },
    },
    Restaurant: {
      screen: Restaurant,
      navigationOptions: {
        headerBackImage: () => <HeaderBack />,
        header: () => <Header />,
        headerRight: () => <HeaderRight />,
      },
    },
  },
  {initialRouteParams: 'Home'},
);
