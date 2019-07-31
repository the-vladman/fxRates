import React from "react";
import { InputNumber } from "antd";
import CurrencyFlag from "react-currency-flags";
import { connect } from "react-redux";
import { rates } from "../actions/rates";

const InputChange = props => {
  const { onChange, value } = props;
  return (
    <div>
      <CurrencyFlag currency="EUR" size="md" style={{ marginRight: 8 }}/>
      <InputNumber style={{ width: 120 }} value={value} onChange={onChange} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    value: state.inputValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => {
      dispatch(rates.changeInput(value));
    }
  };
};

const CInputChange = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputChange);

export { CInputChange };
