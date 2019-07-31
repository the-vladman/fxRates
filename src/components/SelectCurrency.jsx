import React from "react";
import { Select } from "antd";
import CurrencyFlag from "react-currency-flags";
const { Option } = Select;

const SelectCurrency = props => {
  const { handleChange, currenciesList, baseCurrency } = props;
  return (
    <Select value={baseCurrency} onChange={handleChange}>
      {currenciesList.map(currency => (
        <Option key={currency} value={currency}>
          <CurrencyFlag currency={currency} size="sm" /> {currency}
        </Option>
      ))}
    </Select>
  );
};

export { SelectCurrency };
