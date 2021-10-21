import React from 'react';
import CurrencyForm from '../components/CurrencyForm';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <>
        <Header />
        <CurrencyForm />
      </>
    );
  }
}

export default Wallet;
