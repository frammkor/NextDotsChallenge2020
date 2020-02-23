import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {InputComp} from '../../../components'
import {appBackground} from '../../../assets/index';
import Icon from 'react-native-ionicons';
import styles from './styles';

interface Props {
    navigation : any;
}

const HomeScreen : React.FC < Props > = ({navigation}) => {
    const travel = () => {
        navigation.navigate('Explore');
    }
    return (
        <ImageBackground
            source={appBackground}
            style={{
            width: '100%',
            height: '100%'
        }}>
            <View style={styles.MainContainer}>
                <Text>Here goes the logo</Text>
                <TouchableOpacity onPress={travel} >
                <InputComp />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;
