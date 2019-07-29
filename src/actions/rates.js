/* rates Types */
export const ratesTypes = {
    FETCH_RATES: 'FETCH_RATES',
}

/* rates Actions */
export const rates = {
    fetchLoads: (rates) => {
        return {
            type: ratesTypes.FETCH_LOADS,
            rates
        }
    },
}