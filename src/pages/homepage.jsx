import React from 'react';
import Directory from '../components/directory';
import './homepage.styles.scss'
import './projectspage-styles.scss'
import { MDBCard } from 'mdbreact';
import BackButton from '../components/backbutton';

const HomePage = () => (
    <MDBCard style={{paddingBottom: '100px'}}>


     

        <div className='projectspage' >

            <Directory />

        </div>
        <BackButton url='/'/>
    </MDBCard>

)

export default HomePage;