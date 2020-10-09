import React from 'react';
import Directory from '../components/directory';
import './homepage.styles.scss'

const HomePage = () => (
    <div className='homepage' >
        <h1 style={{
            textAlign: 'center'
        }}>Corey Schink
        </h1>
        <Directory />

    </div>

)

export default HomePage;