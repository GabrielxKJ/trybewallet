import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrencyForm from '../components/CurrencyForm';
import { fetchCoin } from '../actions';
import Header from '../components/Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { getCoins } = this.props;
    getCoins();
  }

  render() {
    return (
      <>
        <Header />
        <CurrencyForm />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCoins: () => dispatch(fetchCoin()),
});

Wallet.propTypes = {
  getCoins: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
