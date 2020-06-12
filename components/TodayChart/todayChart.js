import React, { PureComponent } from 'react';
import s from './today.module.css';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: '00:00', uv: 2400, pv: 2400, amt: 2400,
    },
    {
        name: '03:00', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: '06:00', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: '09:00', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: '12:00', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: '15:00', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: '18:00', uv: 3490, pv: 4300, amt: 2100,
    },
];


export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    render() {
        return (
               <div style={{ width: '100%', height: 150 }}>
                   <div className={s.todayTitle}>Today</div>
                   <div className={s.sales}>Sales($)</div>
                   <ResponsiveContainer>
                       <LineChart
                           // width={720}
                           // height={150}
                           data={data}
                           margin={{
                               top: 5, right: 20, left: 20, bottom: 5,
                           }}
                       >
                           <CartesianGrid strokeDasharray="3 3" />
                           <XAxis dataKey="name" />
                           <YAxis />
                           <Tooltip />
                           <Legend />
                           {/*<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />*/}
                           <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                       </LineChart>
                   </ResponsiveContainer>
               </div>
        );
    }
}
