import React from 'react'
import {View, FlatList} from 'react-native'
import {CocktailItem} from '..'
import styles from './styles'

interface Props {
    cocktailsData : Cocktail[];
}

const CocktailList : React.FC < Props > = ({cocktailsData}) => {

    const renderCocktailItem = (itemData : any) => {
        return (<CocktailItem
            name={itemData.item.strDrink}
            imageUrl={itemData.item.strDrinkThumb}/>)
    };

    return (
        <View style={styles.flatListContainer}>
            <FlatList
                numColumns={2}
                data={cocktailsData}
                renderItem={renderCocktailItem}
                keyExtractor={(item, index) => item.idDrink}/>
        </View>
    );

};

export default CocktailList;
