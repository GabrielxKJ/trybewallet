// Coloque aqui suas actions
export const EMAIL_DISPATCH = 'EMAIL_ACTION';
export const CALL_CURRENCIES = 'CALL_CURRENCIES';
export const RECEIVE_CURRENCIES = 'RECEIVE_CURRENCIES';

const emailDispatch = (email) => ({
  type: EMAIL_DISPATCH,
  payload: email,
});

const callCurrencies = () => ({
  type: CALL_CURRENCIES,
});

const receiveCurrencies = (payload) => ({
  type: RECEIVE_CURRENCIES,
  payload,
});

export const fetchCoin = () => async (dispatch) => {
  dispatch(callCurrencies());
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const currencies = await response.json();
  const currenciesArray = Object.keys(currencies).map((key) => key);
  currenciesArray.splice(currenciesArray.indexOf('USDT'), 1);
  dispatch(receiveCurrencies(currenciesArray));
};

export default emailDispatch;
