import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

interface Props {
    name: string;
    imageUrl: string;
}

const DrinkItem: React.FC<Props> = ({name, imageUrl}) => {
    return (
        <View style={styles.itemContainer}>
            <Image
                style={{
                width: '100%',
                height: 200
            }}
                source={{
                uri: imageUrl
            }}/>
            <Text style={styles.drinkName} >{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'black',
        overflow: 'hidden',
        borderRadius: 10,
        width: '48%',
        margin: '1%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    drinkName: {
        margin: 5,
        fontSize: 24,
        color: 'white'
    }
})

export default DrinkItem
