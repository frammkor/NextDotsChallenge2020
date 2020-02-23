import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {fetchCocktails} from '../../../store/actions/cocktails';
import {CocktailList, InputComp} from '../../../components';
import styles from './styles'

interface Props {
    fetchCocktails : Function;
    cocktailsData : Cocktail[];
    fetchError : string;
    fetchIsLoading : boolean;
}

const ExploreScreen : React.FC < Props > = props => {

    const {cocktailsData, fetchIsLoading} = props;
    const [showList,
        setShowList] = useState(false);
    const [inputValue,
        setInputValue] = useState('');

    const handleCancel = () => {
        setShowList(false);
        setInputValue('');
    }

    const handleChange = (text : string) : void => {
        setInputValue(text);

        if (text.length >= 3 && !fetchIsLoading) {
            setShowList(true);
            props.fetchCocktails(text, fetchIsLoading, text);
        }

        if (text.length < 3) {
            setShowList(false);
        }

    }

    const display = !showList
        ? (
            <View style={styles.messageContainer}>
                <Text>Search your favorites drinks by name</Text>
            </View>
        )
        : (cocktailsData === null
            ? (
                <View style={styles.messageContainer}>
                    <Text>Sorry, no drinks with that name</Text>
                </View>
            )
            : (<CocktailList cocktailsData={cocktailsData}/>));

    return (
        <View style={styles.exploreScreenContainer}>
            <InputComp value={inputValue} toSearch={handleChange}/>
            <TextInput
            
                value={inputValue}
                placeholder='Type to start searching'
                onChangeText={(text) => handleChange(text)} />
            <Button title='CANCEL' onPress={() => handleCancel()}/>
            {display}
        </View>
    );
};

const mapStateToProps = (state : any) => {
    const {fetchError, data, fetchIsLoading} = state.cocktailsReducer;
    return {fetchError: fetchError, cocktailsData: data, fetchIsLoading: fetchIsLoading};
};

const mapDispatchToProps = (dispatch : Function) => {
    return {
        fetchCocktails: (data : string, fetchIsLoading : boolean, value : string) => dispatch(fetchCocktails(data, fetchIsLoading, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
