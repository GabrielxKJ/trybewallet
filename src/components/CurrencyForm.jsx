/* eslint-disable max-lines-per-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExpenses, sendGlobal } from '../actions';

class CurrencyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Cartão de crédito',
      tag: 'Alimentação',
      exchangeRates: {},
    };

    this.showCurrencies = this.showCurrencies.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleSend() {
    const { dispatchGlobal, getExpenses } = this.props;
    await getExpenses();
    const { globalStore } = this.props;
    this.setState({
      exchangeRates: globalStore,
    });
    await dispatchGlobal(this.state);
  }

  showCurrencies() {
    const { selectCurrencies } = this.props;
    return selectCurrencies.map((currency, index) => (
      <option key={ index } value={ currency }>{currency}</option>
    ));
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { value, description, currency, method, tag } = this.state;
    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            name="value"
            type="number"
            id="value"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="description"
            type="text"
            id="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select name="currency" id="currency" onChange={ this.handleChange }>
            {this.showCurrencies()}
          </select>
        </label>
        <label htmlFor="method">
          {' '}
          Método de pagamento
          <select name="method" id="method" onChange={ this.handleChange }>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag" id="tag" onChange={ this.handleChange }>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button type="button" onClick={ this.handleSend }> Adicionar despesas </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  selectCurrencies: state.wallet.currencies,
  globalStore: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGlobal: (localState) => dispatch((sendGlobal(localState))),
  getExpenses: () => dispatch(fetchExpenses()),
});

CurrencyForm.propTypes = {
  selectCurrencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  dispatchGlobal: PropTypes.func.isRequired,
  getExpenses: PropTypes.func.isRequired,
  globalStore: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyForm);
