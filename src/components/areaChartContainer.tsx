import React from 'react'
// import { data } from './data'
import { AreaChart, XAxis, YAxis, Tooltip, Area, CartesianGrid } from 'recharts';

const data = [
    { name: 'a', value: 12 },
    { name: 'a', value: 3 },
    { name: 'a', value: 7 },
    { name: 'b', value: 10 },
    { name: 'c', value: -2 },
    { name: 'c', value: -5 },
    { name: 'c', value: -1 },
    { name: 'd', value: -10 },
    { name: 'e', value: 11 }
]
/**
 * This needs to be updated as time progresses and also get the correct 
 */
class AreaChartContainer extends React.Component {

    render() {
        const off = gradientOffset();
        return (
            <div>
                <h1>This is associated with the Area</h1>
                <AreaChart width={730} height={250} data={data}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <defs>
                        <linearGradient id='colorValue' x1='0' y1='0' x2='0' y2='1'>
                            <stop offset={off} stopColor='green' stopOpacity={0.5} />
                            <stop offset={off} stopColor='#B22222' stopOpacity={0.5} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Area type="monotone" dataKey="value" fillOpacity={0.2} fill="url(#colorValue)" />
                </AreaChart>
            </div>
        )
    }
}
const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.value));
    const dataMin = Math.min(...data.map((i) => i.value));

    if (dataMax <= 0) {
        return 0
    }
    if (dataMin >= 0) {
        return 1
    }

    return dataMax / (dataMax - dataMin);

}
export default AreaChartContainer