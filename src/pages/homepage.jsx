import React from 'react';
import Directory from '../components/directory';
import './homepage.styles.scss'
import './projectspage-styles.scss'
import ContactList from '../components/contactlist';
import { MDBCard } from 'mdbreact';
import BackButton from '../components/backbutton';

const HomePage = () => (
    <MDBCard style={{paddingBottom: '100px'}}>


        <ContactList />

        <div className='projectspage' >

            <Directory />

        </div>
        <BackButton url='/'/>
    </MDBCard>

)

export default HomePage;