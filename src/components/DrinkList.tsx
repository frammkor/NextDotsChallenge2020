import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'
import DrinkItem from './DrinkItem'
import {create} from 'react-test-renderer'

interface Props {
    cocktailsData : Cocktail[];
}

const DrinkList : React.FC < Props > = ({cocktailsData}) => {
    const renderCocktailItem = itemData => {
        return (<DrinkItem
            name={itemData.item.strDrink}
            imageUrl={itemData.item.strDrinkThumb}/>)
    }
    return (
        <View style={styles.flatListContainer}>
            <FlatList
                numColumns={2}
                style={styles.flatList}
                data={cocktailsData}
                renderItem={renderCocktailItem}
                keyExtractor={(item, index) => item.idDrink}/>
        </View>
    )
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingBottom: 140

    },
    flatList: {
    }
})

export default DrinkList;
