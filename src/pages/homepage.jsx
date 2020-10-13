import React from 'react';
import Directory from '../components/directory';
import './homepage.styles.scss'
import './projectspage-styles.scss'
import { MDBCard } from 'mdbreact';
import BackButton from '../components/backbutton';

const HomePage = () => (
    <MDBCard style={{paddingTop: '5px', paddingBottom: '200px'}}>

     

        <div className='projectspage' >

            <Directory />

        </div>
        
    </MDBCard>

)

export default HomePage;