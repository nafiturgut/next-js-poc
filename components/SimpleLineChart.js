import React, { useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import CustomizedDot from './CustomizedDot'
import dynamic from 'next/dynamic'


 const SimpleLineChart = ( {data, color} ) =>  {
  const  jsfiddleUrl = 'https://jsfiddle.net/alidingling/9y9zrpjp/';
 // const nafi = { name = 'e', age = 3, ibo = 5}
 // const {ibo, age} = nafi
  useEffect( ()=> { 
    console.log(data)
  },
  []
  )
    return (
       <LineChart width={600} height={300} data={data}
       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={<CustomizedDot />} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart> 
    )
  
}

export default dynamic(() => Promise.resolve(SimpleLineChart), {
  ssr: false
})