import { combineReducers } from 'redux';
import { cocktailsReducer, cocktailsInitialState } from './cocktails/cocktailsReducer';

interface State {
    cocktailsReducer: cocktailsInitialState;
}

const State = combineReducers({
    cocktailsReducer
});

export default State;