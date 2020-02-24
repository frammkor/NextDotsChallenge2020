import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

interface Props {
  value: string;
  toSearch: Function;
}

const InputComponent: React.FC<Props> = props => {
  const {toSearch, value} = props;
  return (
    <View style={styles.inputContainer}>
      <Text>SEARCH icon</Text>
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
