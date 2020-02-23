import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
// SCREENS
import {HomeScreen, ExploreScreen} from '../screens';

interface navigatorOptions {
    initialRouteName: string;
    headerMode: string;
}

const navigatorOptions = {
    initialRouteName: 'Home',
    headerMode: 'none'
}

interface stack {
    Home: React.FC;
    ExploreScreen: React.FC;
}

const stack = {
    HomeScreen,
    ExploreScreen
};


// const StackNavigator = createStackNavigator(
//     stack as object,
//     navigatorOptions as object
// );

const StackNavigator = createStackNavigator(
    {
        //screen identifiers
        Home: {
            screen: HomeScreen
        },
        Explore: {
            screen: ExploreScreen
        }
    },
    // navigatorOptions
);

export default StackNavigator;
