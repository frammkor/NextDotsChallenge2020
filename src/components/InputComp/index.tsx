import React from 'react'
import {View, Text, TextInput} from 'react-native'
import styles from './styles'
import { DefaultTransition } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets';

const InputComp = props => {
    const {functionality, toSearch, value} = props;
    return (
        <View style={styles.inputContainer}>
            <Text>SEARCH icon</Text>
            <TextInput
                value={value}
                onChangeText={(text) => toSearch(text)}
                style={styles.inputTextField}
                placeholder='Click me and start searching'/>
        </View>
    )
};

export default InputComp;