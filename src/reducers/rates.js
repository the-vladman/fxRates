import { ratesTypes } from '../actions/rates'

const initialRates = {
    historicalRates: [],
    currenciesList: [],
    baseCurrency: 'MXN',
}

const ratesApp = (state = initialRates, action) => {
    switch (action.type) {
        case ratesTypes.FETCH_LATEST:
            return {
                ...state,
                today: action.latest.date,
                currenciesList: Object.keys(action.latest.rates),
                historicalRates: [{...action.latest.rates, date : action.latest.date }]
            }

        default:
            return state
    }
}

export default ratesApp