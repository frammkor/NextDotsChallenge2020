import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import {appBackground} from '../assets/index';
import Icon from 'react-native-ionicons'

const IconBar = () => (
    <View>
        <Icon name="search-outline"/>
    </View>
)

const HomeScreen = props => {
    return (
        <ImageBackground source={appBackground} style={{width: '100%', height: '100%'}}>

            <View style={styles.MainContainer}>
                <Text>Here goes the logo</Text>
                <TouchableOpacity
                    style={styles.myButton}
                    onPress={() => {
                    props
                        .navigation
                        .navigate('Explore');
                }}>
                    <Text>Search your favorites cocktail</Text>
                </TouchableOpacity >
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    myButton: {
        backgroundColor: 'white'
    },
    MainContainer: {
        flex: 1,
        // Set content's vertical alignment.
        justifyContent: 'center',
        // Set content's horizontal alignment.
        alignItems: 'center',
        // Set hex color code here.
    }

});

export default HomeScreen
