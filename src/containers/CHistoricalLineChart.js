import { connect } from 'react-redux';

import { HistoricalLineChart } from '../components/HistoricalLineChart';

const mapStateToProps = state => {
    return {
        data: state.historicalRates,
        currency: state.baseCurrency
    }
}

/* const mapDispatchToProps = dispatch => {
    return {
        addEvent: (event) => dispatch(events.addEvent(event))
    }
} */

const CHistoricalLineChart = connect(
    mapStateToProps,
)(HistoricalLineChart)


export { CHistoricalLineChart };