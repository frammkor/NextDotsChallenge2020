import { createStackNavigator } from 'react-navigation-stack';
// SCREENS
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';

const StackNavigator = createStackNavigator(
    {
        //screen identifiers
        Home: {
            screen: HomeScreen
        },
        Explore: {
            screen: ExploreScreen
        }
    }
);

export default StackNavigator;