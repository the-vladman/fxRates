import { connect } from 'react-redux';

import { rates } from '../actions/rates';
import { SelectCurrency } from '../components/SelectCurrency';

const mapStateToProps = state => {
    return {
        currenciesList: state.currenciesList,
        baseCurrency: state.baseCurrency
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleChange: (currency) => dispatch(rates.selectCurrency(currency))
    }
}

const CSelectCurrency = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectCurrency)


export { CSelectCurrency };