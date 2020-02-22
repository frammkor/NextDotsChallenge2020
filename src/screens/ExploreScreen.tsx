import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import {fetchCocktails} from '../store/actions/cocktails';
import DrinkList from '../components/DrinkList';

interface Props {
    fetchCocktails: Function;
    cocktailsData : Cocktail[];
    fetchError : string;
    fetchIsLoading : boolean;
}

const ExploreScreen : React.FC < Props > = props => {

    const {cocktailsData, fetchIsLoading} = props;
    const [showList, setShowList] = useState(false);
    const [inputValue, setInputValue] = useState('');

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
            <Text>Type to search</Text>
        )
        : (cocktailsData === null
            ? (
                <Text>Sorry, no drinks with that name</Text>
            )
            : (<DrinkList cocktailsData={cocktailsData}/>));

    return (
        <View>
            <TextInput
                value={inputValue}
                placeholder='Type to start serching'
                onChangeText={(text) => handleChange(text)}></TextInput>
            <Button title='CANCEL' onPress={handleCancel}/>
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
