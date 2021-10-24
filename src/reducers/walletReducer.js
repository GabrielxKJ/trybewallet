import {
  RECEIVE_CURRENCIES,
  SEND_GLOBAL,
  EXPENSES_RECEIVE,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RECEIVE_CURRENCIES:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSES_RECEIVE:
    return {
      ...state,
      exchangeRates: action.payload,
    };
  case SEND_GLOBAL:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...action.payload,
        id: state.expenses.length,
      }],
    };
  default:
    return state;
  }
}
// // case SALVAR_ESTADO_INPUT:
// // return { ...state,
// // expenses: [...state.expenses,
// // {
// // ...action.inputValue,
// // id: state.expenses.length,
// // exchangeRates: state.currencies,
// // }] };
// // default:
// return state;

export default wallet;
