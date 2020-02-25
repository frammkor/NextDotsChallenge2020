import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  value: string;
  toSearch: Function;
}

const InputComponent: React.FC<Props> = ({toSearch, value}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon name="search" size={25} />

      <TextInput
        value={value}
        onChangeText={text => toSearch(text)}
        style={styles.inputTextField}
        placeholder="Click me and start searching"
      />
    </View>
  );
};

export default InputComponent;
