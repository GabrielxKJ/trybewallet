import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { userEmail, WalletExpenses } = this.props;
    return (
      <header>
        <h2 data-testid="email-field">
          { userEmail }
        </h2>
        <p data-testid="total-field">
          {`Depesas totais = ${WalletExpenses || 0}` }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  walletExpenses: state.wallet.total,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  WalletExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
