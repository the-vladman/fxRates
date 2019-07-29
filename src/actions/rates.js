/* rates Types */
export const ratesTypes = {
    FETCH_LATEST: 'FETCH_LATEST',
    SELECT_CURRENCY: 'SELECT_CURRENCY',
}

/* rates Actions */
export const rates = {
    fetchLatest: (latest) => {
        return {
            type: ratesTypes.FETCH_LATEST,
            latest
        }
    },
    selectCurrency: (currency) => {
        return {
            type: ratesTypes.SELECT_CURRENCY,
            currency
        }
    },
}