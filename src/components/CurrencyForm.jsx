import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CurrencyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.showCurrencies = this.showCurrencies.bind(this);
  }

  showCurrencies() {
    const { selectCurrencies } = this.props;
    console.log(selectCurrencies);
    return selectCurrencies.map((currency, index) => (
      <option key={ index } value={ currency }>{currency}</option>
    ));
  }

  render() {
    return (
      <form>
        <label htmlFor="Valor">
          Valor
          <input type="number" id="Valor" />
        </label>
        <label htmlFor="Descrição">
          Descrição
          <input type="text" id="Descrição" />
        </label>
        <label htmlFor="Moeda">
          Moeda
          <select name="Moeda" id="Moeda">
            {this.showCurrencies()}
          </select>
        </label>
        <label htmlFor="Paypal">
          {' '}
          Método de pagamento
          <select name="Paypal" id="Paypal">
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </label>
        <label htmlFor="Tag">
          Tag
          <select name="Tag" id="Tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  selectCurrencies: state.wallet.currencies,
});

CurrencyForm.propTypes = {
  selectCurrencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(CurrencyForm);
