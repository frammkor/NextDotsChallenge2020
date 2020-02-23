import React from 'react'
import {View, Text, TextInput} from 'react-native'
import styles from './styles'
import { DefaultTransition } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/TransitionPresets';

const InputComp = props => {
    const {functionality, toSearch} = props;
    return (
        <View style={styles.inputContainer}>
            <Text>SEARCH icon</Text>
            <TextInput
                onChangeText={(text) => toSearch(text)}
                style={styles.inputTextField}
                placeholder='Click me and start searching'/>
        </View>
    )
};

export default InputComp;