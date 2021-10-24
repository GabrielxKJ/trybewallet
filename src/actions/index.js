// Coloque aqui suas actions
export const EMAIL_DISPATCH = 'EMAIL_ACTION';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';
export const EXPENSES_RECEIVE = 'EXPENSES_RECEIVE';
export const SEND_GLOBAL = 'SEND_GLOBAL';

// user
export const emailDispatch = (email) => ({
  type: EMAIL_DISPATCH,
  payload: email,
});
// wallet
const receiveCurrencies = (payload) => ({
  type: RECEIVE_CURRENCIES,
  payload,
});

export const sendGlobal = (payload) => ({
  type: SEND_GLOBAL,
  payload,
});

const receiveExpenses = (payload) => ({
  type: EXPENSES_RECEIVE,
  payload,
});

export const fetchCoin = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  const currenciesArray = Object.keys(currencies).map((key) => key);
  currenciesArray.splice(currenciesArray.indexOf('USDT'), 1);
  dispatch(receiveCurrencies(currenciesArray));
};

export const fetchExpenses = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const expenses = await response.json();
  dispatch(receiveExpenses(expenses));
};
