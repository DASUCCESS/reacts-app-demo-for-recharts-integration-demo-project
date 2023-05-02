import React from 'react';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import RechartsData from './RechartsData';


function DemoCharts() {
    return (
      <div>
        <h2>Bar Chart Demo Example</h2>
        <BarChart width={600} height={300} data={RechartsData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Bar dataKey="bar" fill="#8884d8" />
        </BarChart>
        <h2>Pie Chart Demo Example</h2>
        <PieChart width={600} height={300}>
          <Pie dataKey="pie" data={RechartsData} nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
          <Tooltip/>
          </PieChart>
  <h2>Line Chart Demo Example</h2>
  <LineChart width={600} height={300} data={RechartsData}>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="line" stroke="#8884d8" />
  </LineChart>
</div>
);
}

export default DemoCharts;
  
