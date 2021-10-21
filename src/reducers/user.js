// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_DISPATCH } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EMAIL_DISPATCH:
    return {
      ...state,
      email: action.payload };
  default:
    return state;
  }
}

export default user;
