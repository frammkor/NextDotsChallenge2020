import {
  FETCH_COCKTAILS_START,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_ERROR,
} from '../../actions/types';

type Actions =
  | {
      type: 'FETCH_COCKTAILS_START';
      fetchIsLoading: boolean;
      inputText: string;
    }
  | {
      type: 'FETCH_COCKTAILS_SUCCESS';
      data: Cocktail[];
      fetchIsLoading: boolean;
    }
  | {
      type: 'FETCH_COCKTAILS_ERROR';
      fetchIsLoading: boolean;
      fetchError: string;
    };

export type cocktailsInitialState = {
  fetchError: string;
  fetchIsLoading: boolean;
  data: Cocktail[];
  inputText: string;
};

const cocktailsInitialState = {
  fetchIsLoading: false,
  fetchError: '',
  inputText: '',
  data: [],
};

export const cocktailsReducer = (
  state: cocktailsInitialState = cocktailsInitialState,
  action: Actions,
) => {
  let {type, data} = action;
  switch (type) {
    case FETCH_COCKTAILS_START:
      return {
        ...state,
        fetchIsLoading: true,
        inputText: data,
      };
    case FETCH_COCKTAILS_SUCCESS:
      return {
        ...state,
        fetchIsLoading: false,
        fetchError: '',
        data,
      };
    case FETCH_COCKTAILS_ERROR:
      return {
        ...state,
        fetchIsLoading: false,
        fetchError: 'Ups, something went wrong',
      };
    default:
      return state;
  }
};
