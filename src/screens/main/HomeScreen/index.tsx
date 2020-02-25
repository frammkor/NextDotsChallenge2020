import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {appBackground} from '../../../assets';
import styles from './styles';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const travel = () => {
    navigation.navigate('Explore');
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <ImageBackground source={appBackground} style={styles.ImgBackground}>
        <TouchableOpacity onPress={travel}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextField}>Cocktail Finder</Text>
            <Text style={styles.secondaryText}> Click here to find the best cocktails</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
