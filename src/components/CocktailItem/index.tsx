import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

interface Props {
  name: string;
  imageUrl: string;
}

const CocktailItem: React.FC<Props> = ({name, imageUrl}) => {
  return (
    <View style={styles.itemContainer}>
      <Image
        style={styles.drinkImage}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={styles.drinkName}>{name}</Text>
    </View>
  );
};

export default CocktailItem;
