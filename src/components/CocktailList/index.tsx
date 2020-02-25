import React from 'react';
import {View, FlatList} from 'react-native';
import CocktailItem from '../CocktailItem';
import styles from './styles';

interface Props {
  cocktailsData: Cocktail[];
}

interface itemData {
  item: Cocktail;
}

const CocktailList: React.FC<Props> = ({cocktailsData}) => {
  const renderCocktailItem = itemData => {
    return (
      <CocktailItem
        name={itemData.item.strDrink}
        imageUrl={itemData.item.strDrinkThumb}
      />
    );
  };

  return (
    <View style={styles.flatListContainer}>
      <FlatList
        numColumns={2}
        data={cocktailsData}
        renderItem={renderCocktailItem}
        keyExtractor={item => item.idDrink}
      />
    </View>
  );
};

export default CocktailList;
