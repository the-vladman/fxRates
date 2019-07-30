import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';


class HistoricalLineChart extends PureComponent {
    
    _renderLineChart = (data, currency, lineStroke) => (
        <LineChart data={data}>  
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign='top'/>
          <Line name="Value" dataKey={currency} stroke={lineStroke} />
        </LineChart>
    );

    render () {
        const { data, currency } = this.props;
        return (
            <ResponsiveContainer width="95%" height={600}>
                {this._renderLineChart(data, currency, '#0CA669')}
            </ResponsiveContainer>                                     
        )
    }
}

HistoricalLineChart.propTypes = {
    data: PropTypes.array.isRequired,
    currency: PropTypes.string.isRequired,
}

export { HistoricalLineChart };