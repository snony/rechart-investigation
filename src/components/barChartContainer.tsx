import React from 'react'

import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend, Rectangle } from 'recharts'
/**
 * The key thing to observe about rechart is that the lineChart is like the container of 
 */

 // {
    //     "AnswerRef": "one",
    //     "Text": "5 out of 50 throws",
    //     "foo": -12,
    //     "Score": 0,
    //     "RespondentPercentage": 12,
    //     "Rank": 1
    // },
    // {
    //     "AnswerRef": "one",
    //     "Text": "5 out of 50 throws",
    //     "Score": 0,
    //     "foo": 0,
    //     "RespondentPercentage": 0,
    //     "Rank": 1
    // },
const data = [
    {
        "AnswerRef": "one",
        "Text": "5 out of 50 throws",
        "Score": 0,
        "foo": 12,
        "RespondentPercentage": 10,
        "Rank": 1
    },
];

// const getPath = (x:(number|undefined), y:number, width:number, height:number) => {
//     return `M${x},${y + height}
//             C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
//             C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
//             Z`;
//   };

interface RombShapeProps{
  fill?: string | null | undefined,
  x?: number | undefined,
  y?: number | undefined ,
  width?: number | undefined,
  height?: number | undefined,
}

const RombShape: React.SFC<RombShapeProps> = (props)=>{
    // console.log(props)
    const { fill, x, y, width, height } = props;
    return (
        <path d="M150 0 L75 200 L225 200 Z" />
    )
}

class LineChartContainer extends React.Component {

    render() {

        return (
            <div>
                <BarChart
                    stackOffset="sign"
                    width={700}
                    height={260}
                    data={data}
                    margin={{ top: 5, right: 0, left: 0, bottom: 25 }}>
                    <XAxis
                        dataKey="foo"
                        type="number"
                        domain = {[-18, 18]}//TODO add datamax and datamin to the data you had
                        ticks ={[0]}
                    />
                    {/* <YAxis hide /> */}
                    <Bar
                        dataKey="RespondentPercentage"
                        barSize={10}
                        fontFamily="sans-serif"
                        fill="#8884d8"
                        shape={RombShape}
                    >
                        {
                  data.map((entry, index) => (
                    <Cell key={index} fill={entry.foo>=0 ? '#290a0a' : '#005599' }/>
                  ))
                }
                    </Bar>
                </BarChart>
            </div>
        )
    }
}

/**
 *                 <BarChart
                    stackOffset="sign"
                    width={700}
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
 */

export default LineChartContainer
