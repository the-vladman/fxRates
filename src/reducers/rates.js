import { ratesTypes } from '../actions/rates'

const initialRates = {
    ratesList: [],
    currenciesList: [],
}

const ratesApp = (state = initialRates, action) => {
    switch (action.type) {
        case ratesTypes.FETCH_RATES:
            return {
                ...state,
                ratesList: action.rates
            }

        default:
            return state
    }
}

export default ratesApp