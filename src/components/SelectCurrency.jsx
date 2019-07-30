import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const SelectCurrency = (props) => {
    const { handleChange, currenciesList, baseCurrency } = props;
    return(
        <Select value={baseCurrency} style={{ width: 120 }} onChange={handleChange}>
            {
                currenciesList.map( currency => <Option key={currency} value={currency}>{currency}</Option>)
            }
        </Select>
    );
  }

export { SelectCurrency }