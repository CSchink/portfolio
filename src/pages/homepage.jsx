import React from 'react';
import Directory from '../components/directory';
import Header from '../components/header';
import './homepage.styles.scss'

const HomePage = () => (
    <div>
        <div className='homepage' >
            <Header title="Corey Schink's Portfolio" />
            <Directory />

        </div>
    </div>
)

export default HomePage;