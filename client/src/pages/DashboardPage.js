/* React Imports */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

/* Components */
import DashboardNavbar from '../components/DashboardNavbar';

function DashboardPage() {

    const COLORS = ['#0088FE', '#000C49F', '#FFBB28', '#FF8042'];

    const data = [
        { name: 'Politics', value: 30 },
        { name: 'TV/Film', value: 10 },
        { name: 'Fashion', value: 25 },
        { name: 'Gaming', value: 7 },
    ];

    const lineData = [
        { name: 'Sunday', views: 4000, subscriptions: 200 },
        { name: 'Monday', views: 3000, subscriptions: 198 },
        { name: 'Tuesday', views: 2000, subscriptions: 900 },
        { name: 'Wednesday', views: 2780, subscriptions: 308 },
        { name: 'Thursday', views: 2780, subscriptions: 390 },
        { name: 'Friday', views: 2780, subscriptions: 106 },
        { name: 'Saturday', views: 2780, subscriptions: 201 },
    ];

    return(
        <main>
            <DashboardNavbar />
            <h1>Welcome, User!</h1>
            <div className="statistics_overview">
                <ResponsiveContainer className="linechart_container" width="100%" height={400}>
                    <h2>Engagements (Weekly)</h2>
                    <LineChart
                        width={800}
                        height={400}
                        data={lineData}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="subscriptions" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="views" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
                <div className="piechart_container">
                    <h2>Your Published Content (by Subject)</h2>
                    <PieChart className="pie_chart" width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </main>
    );
};

export default DashboardPage;
