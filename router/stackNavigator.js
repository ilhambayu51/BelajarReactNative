import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screen/Home';
import Profil from '../screen/Profil';
import Trip from '../screen/Trip';
import Notification from '../screen/Notification';

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
  },
  {initialRouteParams: 'Home'},
);
