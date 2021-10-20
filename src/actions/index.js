// Coloque aqui suas actions
export const EMAIL_DISPATCH = 'EMAIL_ACTION';

const emailDispatch = (email) => ({
  type: EMAIL_DISPATCH,
  payload: email,
});

export default emailDispatch;
