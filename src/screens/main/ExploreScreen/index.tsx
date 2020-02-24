import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {fetchCocktails} from '../../../store/actions/cocktails';
import {CocktailList, InputComponent} from '../../../components';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  fetchCocktails: Function;
  cocktailsData: Cocktail[];
  fetchError: string;
  fetchIsLoading: boolean;
  navigation: any;
}

const ExploreScreen: React.FC<Props> = props => {
  const {cocktailsData, fetchIsLoading, fetchError, navigation} = props;
  const [showList, setShowList] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleCancel = () => {
    setShowList(false);
    setInputValue('');
  };

  const handleChange = (text: string): void => {
    setInputValue(text);

    if (text.length >= 3 && !fetchIsLoading) {
      setShowList(true);
      props.fetchCocktails(text, fetchIsLoading, text);
    }

    if (text.length < 3) {
      setShowList(false);
    }
  };

  const display = fetchError ? (
    <View style={styles.messageContainer}>
      <Text style={styles.errorText}>{fetchError}</Text>
    </View>
  ) : !showList ? (
    <View style={styles.messageContainer}>
      <Text style={styles.message}>Search your favorites drinks by name</Text>
    </View>
  ) : cocktailsData === null ? (
    <View style={styles.messageContainer}>
      <Text style={styles.message}>There are no drinks with that name</Text>
    </View>
  ) : (
    <CocktailList cocktailsData={cocktailsData} />
  );

  return (
    <SafeAreaView style={styles.exploreScreenContainer}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}>
          <Icon name="home" size={20} />
          <Text>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => handleCancel()}>
          <Text>CANCEL</Text>
          <Icon name="cancel" size={20} />
        </TouchableOpacity>
      </View>
      <InputComponent value={inputValue} toSearch={handleChange} />
      <View style={styles.displayContainer}>{display}</View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: any) => {
  const {fetchError, data, fetchIsLoading} = state.cocktailsReducer;
  return {
    fetchError,
    cocktailsData: data,
    fetchIsLoading,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchCocktails: (data: string, fetchIsLoading: boolean, value: string) =>
      dispatch(fetchCocktails(data, fetchIsLoading, value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExploreScreen);
