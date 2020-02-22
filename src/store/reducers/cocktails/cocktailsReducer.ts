import {FETCH_COCKTAILS_START, FETCH_COCKTAILS_SUCCESS, FETCH_COCKTAILS_ERROR} from '../../actions/types';


type Actions = 
{
    type: 'FETCH_COCKTAILS_START',
    fetchIsLoading: boolean,
    inputText: string
} | {
    type: 'FETCH_COCKTAILS_SUCCESS',
    data: Cocktail[],
    fetchIsLoading: boolean
} | {
    type: 'FETCH_COCKTAILS_ERROR',
    fetchIsLoading: boolean,
    fetchError: string
};

export type cocktailsInitialState = {
    fetchError: string;
    fetchIsLoading: boolean;
    data: Cocktail[] | undefined;
    inputText: string;
}

const cocktailsInitialState = {
    fetchIsLoading: false,
    fetchError: null,
    inputText: null,
    data: []
}

export const cocktailsReducer = (state : cocktailsInitialState = cocktailsInitialState, action : Actions) => {
    let { type, data, err } = action;
    switch (type) {
        case FETCH_COCKTAILS_START:
            return {
                ...state,
                fetchIsLoading: true,
                inputText: data
            };
        case FETCH_COCKTAILS_SUCCESS:
            return {
                ...state,
                fetchIsLoading: false,
                data: data.drinks
            };
        case FETCH_COCKTAILS_ERROR:
            return {
                ...state,
                fetchIsLoading: false,
                fetchError: err
            };
        default:
            return state;
    }
};