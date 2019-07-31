import React from "react";
import { Statistic } from "antd";
import { connect } from "react-redux";

const ExchangeStatistic = props => {
  return <Statistic value={props.value} precision={4} />;
};

const mapStateToProps = state => {
  const { historicalRates, baseCurrency, inputValue } = state;
  const latest = historicalRates[historicalRates.length - 1];
  const selectCurrency = latest ? latest[baseCurrency] : 1;
  const exchangeValue = inputValue * selectCurrency;
  return {
    value: exchangeValue
  };
};

const CExchangeValue = connect(mapStateToProps)(ExchangeStatistic);

export { CExchangeValue };
