import React from 'react'
import { data } from './data'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Label} from 'recharts'
/**
 * The key thing to observe about rechart is that the lineChart is like the container of 
 */

class LineChartContainer extends React.Component {

    render() {

        return (
            <div>
                <LineChart width={730} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    {/* <CartesianGrid strokeDasharray='3 3' /> */}
                    <XAxis dataKey='name' />
                    <YAxis >
                        <Label  position='top' style={{ textAnchor: 'middle' }} offset={20}>
                            (M)
                        </Label>
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top" height={36}/>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                </LineChart>
            </div>
        )
    }
}

export default LineChartContainer