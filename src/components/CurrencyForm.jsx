import React, { Component } from 'react';

class CurrencyForm extends Component {
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
            <option>USD</option>
          </select>
        </label>
        <label htmlFor="Paypal">
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

export default CurrencyForm;
