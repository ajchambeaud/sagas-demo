// @flow

import type { Character } from '../types';
import type { Action } from '../actions';

type Status = 'init' | 'pending' | 'error' | 'success';

type State = {
  +people: Array<Character>,
  +status: Status,
  +error: ?string
};

const initialState: State = {
  people: [],
  status: 'init',
  error: null
};

const reducer = (state: State, action: Action): State => {
  state = state || initialState;

  switch (action.type) {
    case 'LOAD_PEOPLE_STARTED':
      return {
        ...state,
        status: 'pending'
      };

    case 'LOAD_PEOPLE_SUCCESS':
      return {
        ...state,
        people: action.payload,
        status: 'success'
      };

    case 'LOAD_PEOPLE_ERROR':
      return {
        ...state,
        people: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
