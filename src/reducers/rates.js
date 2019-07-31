import { ratesTypes } from '../actions/rates'

const initialRates = {
    historicalRates: [],
    currenciesList: [],
    baseCurrency: 'MXN',
    inputValue: 1,
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

        case ratesTypes.ADD_HISTORICAL:
            return {
                ...state,
                historicalRates: [action.rates, ...state.historicalRates]
            }

        case ratesTypes.SELECT_CURRENCY:
            return {
                ...state,
                baseCurrency: action.currency,
            }
        
        case ratesTypes.CHANGE_INPUT:
            return {
                ...state,
                inputValue: action.value,
            }

        default:
            return state
    }
}

export default ratesApp