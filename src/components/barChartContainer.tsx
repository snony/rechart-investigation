import React from 'react'

<<<<<<< HEAD
import { BarChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend, Rectangle } from 'recharts'
=======
import { LineChart, Bar, XAxis, YAxis, Cell, CartesianGrid, Tooltip, Legend } from 'recharts'
>>>>>>> cba5d629cd44b891147f69de796cecaf9d5ebebc
/**
 * The key thing to observe about rechart is that the lineChart is like the container of 
 */

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
<<<<<<< HEAD

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

=======
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
>>>>>>> cba5d629cd44b891147f69de796cecaf9d5ebebc
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
<<<<<<< HEAD
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
=======
                </LineChart>
>>>>>>> cba5d629cd44b891147f69de796cecaf9d5ebebc
            </div>
        )
    }
}



export default LineChartContainer
