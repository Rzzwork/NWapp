import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import './Home.css'
import Button from 'react-bootstrap/Button';

export default function Home() {

    const navigate = useNavigate();

    const navigateToLinacPage = () => {
        // 👇️ navigate to /contacts
        navigate('/linacPage');
    };

    const navigateToMQPage = () => {
        // 👇️ navigate to /
        navigate('/MQPage');
    };


    return (
        <div className='homepage container'>
            <div className="mb-2">

                <div className="mb-2">
                    <Button variant="outline-dark" size="sm" >
                        LINAC
                    </Button>{' '}
                </div>

                <Button size="sm" variant="success" onClick={navigateToLinacPage}>NWR TB</Button>{' '}
                <Button size="sm" variant="success">NWR TOMO</Button>{' '}
                <Button size="sm" variant="success">CDH Trilogy</Button>{' '}
                <Button size="sm" variant="success">KISH TB</Button>{' '}
                <Button size="sm" variant="success">CDH TOMO</Button>{' '}
                <Button size="sm" variant="success">DELNOR TB</Button>{' '}
                <Button size="sm" variant="success">Memorial TB</Button>{' '}
                <Button size="sm" variant="success">LFH VERSA</Button>{' '}
                <Button size="sm" variant="success">GL VERSA</Button>{' '}
            </div>
            <div className="mb-2">
                <div className="mb-2">
                    <Button variant="outline-dark" size="sm">
                        MQ
                    </Button>{' '}
                </div>
                <Button size="sm" variant="success" onClick={navigateToMQPage}>NWR MQ</Button>{' '}
                <Button size="sm" variant="success">CDH MQ</Button>{' '}
                <Button size="sm" variant="success">DELNOR MQ</Button>{' '}
                <Button size="sm" variant="success">Memorial MQ</Button>{' '}
                <Button size="sm" variant="success">LFH MQ</Button>{' '}

            </div>
        </div>

    )
}