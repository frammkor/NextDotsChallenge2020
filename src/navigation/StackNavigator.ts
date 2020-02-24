import {createStackNavigator} from 'react-navigation-stack';
// SCREENS
import {HomeScreen, ExploreScreen} from '../screens';

const navigatorOptions = {
  initialRouteName: 'Home',
  headerMode: 'none',
};

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Explore: {
      screen: ExploreScreen,
    },
  },
  navigatorOptions,
);

export default StackNavigator;
