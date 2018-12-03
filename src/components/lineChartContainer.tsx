import React from 'react'
import { data } from './data'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'
/**
 * The key thing to observe about rechart is that the lineChart is like the container of 
 */

class LineChartContainer extends React.Component {

    render() {

        return (
            <div>
                <LineChart width={730} height={250} data={data} >
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}

export default LineChartContainer