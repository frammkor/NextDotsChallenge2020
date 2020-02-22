import { FETCH_COCKTAILS_START, FETCH_COCKTAILS_SUCCESS, FETCH_COCKTAILS_ERROR } from './types';
import CocktailService from '../../provider/services/CocktailService';

export const fetchCocktailsStart = (data: string) => {
    console.log('3');
    return {
        type: FETCH_COCKTAILS_START,
        data
    };
};

export const fetchCocktailsSuccess = (data: object) => {
    return {
        type: FETCH_COCKTAILS_SUCCESS,
        data
    };
};

export const fetchCocktailsError = (err: string) => {
    return {
        type: FETCH_COCKTAILS_ERROR,
        err
    };
};

export function fetchCocktails(data: string, fetchIsLoading: boolean, value: string) {
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