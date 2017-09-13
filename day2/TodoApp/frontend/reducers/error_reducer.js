import { RECEIVE_ERRORS, CLEAR_ERRORS} from "../actions/error_actions";
import merge from 'lodash/merge';

const initialState = [];

const errorReducer = function errorReducer(state = initialState,
                                             action) {
     Object.freeze(state);
     switch(action.type) {
       case RECEIVE_ERRORS:
          console.log([...state, ...action.errors]);
          return [...state, ...action.errors];
       case CLEAR_ERRORS:
          return [];
       default:
        return state;
     }
};

export default errorReducer;
