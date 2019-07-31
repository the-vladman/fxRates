/* rates Types */
export const ratesTypes = {
    FETCH_LATEST: 'FETCH_LATEST',
    ADD_HISTORICAL: 'ADD_HISTORICAL',
    SELECT_CURRENCY: 'SELECT_CURRENCY',
    CHANGE_INPUT: 'CHANGE_INPUT',
}

/* rates Actions */
export const rates = {
    fetchLatest: (latest) => {
        return {
            type: ratesTypes.FETCH_LATEST,
            latest
        }
    },
    addHistorical: (rates) => {
        return {
            type: ratesTypes.ADD_HISTORICAL,
            rates
        }
    },
    selectCurrency: (currency) => {
        return {
            type: ratesTypes.SELECT_CURRENCY,
            currency
        }
    },
    changeInput: (value) => {
        return {
            type: ratesTypes.CHANGE_INPUT,
            value
        }
    },
}