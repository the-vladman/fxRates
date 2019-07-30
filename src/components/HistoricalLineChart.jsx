import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

class HistoricalLineChart extends PureComponent {
    
    _renderLineChart = (data, currency, lineStroke) => (
        <LineChart data={data}> 
          <Line name="Value" dataKey={currency} stroke={lineStroke}/>  
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date"/>
          <YAxis type='number' padding={{ left: 10 }} domain={[dataMin => (Math.round(dataMin) - .5), dataMax => (Math.round(dataMax) + .5)]}/>
          <Tooltip formatter={value => value.toFixed(4)}/>
          <Legend verticalAlign='top'/>
        </LineChart>
    );

    render () {
        const { data, currency } = this.props;
        return (
            <ResponsiveContainer height={600}>
                {this._renderLineChart(data, currency, '#8dd1e1')}
            </ResponsiveContainer>                                     
        )
    }
}

HistoricalLineChart.propTypes = {
    data: PropTypes.array.isRequired,
    currency: PropTypes.string.isRequired,
}

export { HistoricalLineChart };