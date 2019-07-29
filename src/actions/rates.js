/* rates Types */
export const ratesTypes = {
    FETCH_LATEST: 'FETCH_LATEST',
}

/* rates Actions */
export const rates = {
    fetchLatest: (latest) => {
        return {
            type: ratesTypes.FETCH_LATEST,
            latest
        }
    },
}