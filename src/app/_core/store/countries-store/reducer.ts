import { Actions, ActionTypes } from './actions';
import { initialState } from './state';

export function countriesReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.SEARCH_COUNTRIES: {
      return {
        ...state,
        error: null,
        isLoading: true
      };
    }
    case ActionTypes.SEARCH_COUNTRIES_SUCCESS: {
      const {
        payload: { countries }
      } = action;
      return {
        ...state,
        countries,
        error: null,
        isLoading: false
      };
    }
    case ActionTypes.SEARCH_COUNTRIES_ERROR: {
      const {
        payload: { error }
      } = action;
      return {
        ...state,
        error,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}
