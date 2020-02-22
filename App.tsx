/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
// import { ThemeProvider } from 'styled-components';
import {store} from './src/store';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar
} from 'react-native';

import {Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
// Navigation
import AppNavigator from './src/navigation/AppNavigator';

import {enableScreens} from 'react-native-screens';

enableScreens();

declare var global : {
    HermesInternal : null | {}
};

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>
    );
};

export default App;
