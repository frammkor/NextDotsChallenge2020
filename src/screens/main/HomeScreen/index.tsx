import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {InputComponent} from '../../../components';
import {appBackground} from '../../../assets';
import Icon from 'react-native-ionicons';
import styles from './styles';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const travel = () => {
    navigation.navigate('Explore');
  };
  return (
    <ImageBackground source={appBackground} style={styles.ImgBackground}>
      <View style={styles.MainContainer}>
        <Text>Here goes the logo</Text>
        <TouchableOpacity onPress={travel}>
          <InputComponent />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
