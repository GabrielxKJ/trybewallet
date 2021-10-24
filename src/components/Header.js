import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.handleExpenses = this.handleExpenses.bind(this);
  }

  handleExpenses() {
    const { walletExpenses } = this.props;
    if (walletExpenses.length === 0) return '0.00';
    const sumExpenses = walletExpenses.map((expense) => {
      const cambio = Object.values(expense.exchangeRates)
        .find((coin) => expense.currency === coin.code);
      const convertCoin = Number(expense.value) * Number(cambio.ask);
      console.log(convertCoin);
      return convertCoin.toFixed(2);
    });
    return sumExpenses.reduce((acc, sum) => (Number(acc) + Number(sum)).toFixed(2));
  }

  render() {
    const { userEmail } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">
          { userEmail }
        </h2>
        <p data-testid="total-field">
          {this.handleExpenses()}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletExpenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  walletExpenses: PropTypes.shape({
    length: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, null)(Header);
