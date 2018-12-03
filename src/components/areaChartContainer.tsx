import React from 'react'
// import { data } from './data'
import { AreaChart, XAxis, YAxis, Tooltip, Area } from 'recharts';

const data = [
    { name: 'a', value: 12 },
    { name: 'b', value: 10 },
    { name: 'c', value: -9 },
    { name: 'd', value: 10 },
    { name: 'e', value: -2 }
]

class AreaChartContainer extends React.Component {

    render() {

        return (
            <div>
                <h1>This is associated with the Area</h1>
                <AreaChart width={730} height={250} data={data}>
                    <defs>
                        <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset='50%' stopColor='green' stopOpacity={0.8} />
                            <stop offset='50%' stopColor='red' stopOpacity={0.8} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey='name' />
                    <YAxis />
                    {/* <Tooltip /> */}
                    <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={0.6} fill="url(#colorValue)" />
                </AreaChart>
            </div>
        )
    }
}

export default AreaChartContainer