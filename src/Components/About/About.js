import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import './About.css'

const About = () => {
    const dataLoad = useLoaderData()
    const { month, sell, revenue, investment } = dataLoad
    return (
        <div  className='text-center my-4 flex flex-col'>
            <h2 className='my-4'>This is About page</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='container mx-auto'>
                    <LineChart width={500} height={300} data={dataLoad}>
                        <Line type="monotone" dataKey="revenue" stroke="#8884d8"></Line>
                        <CartesianGrid></CartesianGrid>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis ></YAxis>
                    </LineChart>
                </div>
                <div className='container mx-auto'>
                    <LineChart width={500} height={300} data={dataLoad}>
                        <Line type="monotone" dataKey="investment" stroke="#8884d8"></Line>
                        <CartesianGrid></CartesianGrid>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis ></YAxis>
                    </LineChart>
                </div>
                <div className='container mx-auto'>
                    <LineChart width={500} height={300} data={dataLoad}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8"></Line>
                        <CartesianGrid></CartesianGrid>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis ></YAxis>
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default About;