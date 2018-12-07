import React from 'react'

import { LineChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend } from 'recharts'
/**
 * The key thing to observe about rechart is that the lineChart is like the container of 
 */

const data = [
    {
        "AnswerRef": "one",
        "Text": "5 out of 50 throws",
        "Score": 0,
        "foo": 12,
        "RespondentPercentage": 12,
        "Rank": 1
    },
];
interface CustomizeTickProps {
    x: number
    y: number
    payload: any
}
const CustomizeTick: React.SFC<CustomizeTickProps> = ({ x, y, payload }) => {
    return (payload.value === 0 ?
        <g transform={`translate(${x},${y})`}>
            <text strokeWidth={2} x={-4} y={-5} dy={16} textAnchor="center" fill="black" >{payload.value}</text>
        </g>
        :
        <g transform={`translate(${x},${y})`}>
            <text stroke="green" strokeWidth={2} x={-10} y={-45} dy={16} textAnchor="center" fill="green" >{payload.value}</text>
            <rect x="-16" y="-15" dy={16} transform="rotate(45)" width="10" height="10" stroke="green" fill="green" strokeWidth="1" />
        </g>
    )
}
class LineChartContainer extends React.Component {

    render() {

        return (
            <div>
                <LineChart
                    stackOffset="sign"
                    width={700}
                    height={260}
                    data={data}
                >
                    <XAxis
                        dataKey="foo"
                        type="number"
                        domain={[-18, 18]}//TODO add datamax and datamin to the data you had
                        ticks={[0, 10]}
                        tick={CustomizeTick}
                    />
                </LineChart>
            </div>
        )
    }
}



export default LineChartContainer
