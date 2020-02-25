import {
  FETCH_COCKTAILS_START,
  FETCH_COCKTAILS_SUCCESS,
  FETCH_COCKTAILS_ERROR,
} from './types';
import CocktailService from '../../provider/cocktail/CocktailService';

interface response {
  drinks: Cocktail[];
}

export const fetchCocktailsStart = (data: string) => {
  return {
    type: FETCH_COCKTAILS_START,
    data,
  };
};

export const fetchCocktailsSuccess = (response: response) => {
  const shrinkCocktails = (drink: Cocktail) => {
    return {
      strDrinkThumb: drink.strDrinkThumb,
      strDrink: drink.strDrink,
      idDrink: drink.idDrink,
    };
  };
  let cocktailsArray: Cocktail[] = [];
  if (response.drinks) {
    cocktailsArray = response.drinks.map(shrinkCocktails);
  }
  return {
    type: FETCH_COCKTAILS_SUCCESS,
    data: cocktailsArray,
  };
};

export const fetchCocktailsError = (err: string) => {
  return {
    type: FETCH_COCKTAILS_ERROR,
    err,
  };
};

export function fetchCocktails(
  data: string,
  fetchIsLoading: boolean,
  value: string,
) {
  return async (dispatch: Function) => {
    try {
      if (!fetchIsLoading) {
        dispatch(fetchCocktailsStart(data));
        let cocktails: any = await CocktailService.getCocktails(value);
        dispatch(fetchCocktailsSuccess(cocktails));
      }
    } catch (err) {
      dispatch(fetchCocktailsError(err));
    }
  };
}
