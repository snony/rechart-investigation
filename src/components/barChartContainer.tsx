import React from 'react'

import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend } from 'recharts'
/**
 * The key thing to observe about rechart is that the lineChart is like the container of 
 */
const data = [
    {
        "AnswerRef": "one",
        "Text": "5 out of 50 throws",
        "foo": -12,
        "Score": 0,
        "RespondentPercentage": 12,
        "Rank": 1
    },
    {
        "AnswerRef": "one",
        "Text": "5 out of 50 throws",
        "Score": 0,
        "foo": 0,
        "RespondentPercentage": 0,
        "Rank": 1
    },
    {
        "AnswerRef": "one",
        "Text": "5 out of 50 throws",
        "Score": 0,
        "foo": 12,
        "RespondentPercentage": 12,
        "Rank": 1
    },
];

class LineChartContainer extends React.Component {

    render() {

        return (
            <div>
                <BarChart
                    width={900}
                    height={260}
                    data={data}
                    margin={{ top: 5, right: 0, left: 0, bottom: 25 }}>
                    <XAxis
                        dataKey="foo"
                    />
                    <YAxis hide />
                    <CartesianGrid
                        vertical={false}
                        horizontal={false}
                        stroke="#ebf3f0"
                    />
                    <Bar
                        dataKey="RespondentPercentage"
                        barSize={100}
                        fontFamily="sans-serif"
                    >

                    </Bar>
                </BarChart>
            </div>
        )
    }
}

export default LineChartContainer