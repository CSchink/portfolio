import React from 'react'
import { Fieldset } from 'primereact/fieldset';
import './resume-styles.scss'
import 'primereact/resources/themes/saga-blue/theme.css';
import SyntaxComponent from '../components/syntax';
import ContactList from '../components/contactlist';
import Fade from 'react-reveal/Fade';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
import '../styles/navigation.css'
import { MDBCard } from 'mdbreact';
import Header from '../components/header';
import BackButton from '../components/backbutton';

const PortfolioPage = () => (
    <MDBCard>
        
        <Header section="section1" title='Portfolio' intro='A comprehensive database for students of science and history' />

        <div id="section1">

            <BreadcrumbsItem to={'/projects'} eventKey={2.1} compare={(a, b) => a.weight - b.weight} >
                Projects
        </BreadcrumbsItem>
            <BreadcrumbsItem glyph='resume' to={'/projects/resume'} eventKey={2.2} compare={(a, b) => a.weight - b.weight}>
                Portfolio
        </BreadcrumbsItem>


            <div className='container '>
                <h1 className='heading' style={{
                    paddingTop: '60px',
                    textAlign: 'center'
                }}> My Portfolio </h1>
                <br></br>

                <Fade right>
                    <div>

                        <h3 >Project Overview</h3>


                        <p>As something of a history nerd I began this project with a simple goal in mind - create a place where I can catalog a vast amount of data, spanning centuries, into an easy-to-retrieve system</p>
                        <p className='paragraph'>History Lab has been incarnated in three different forms over the course of my 3-year learning career.</p>
                    </div>
                    <div>
                        <ol>


                            <li>In its first form it was a simple card-display system, mapping through an array of cards which would populate the screen with little to no sorting, filtering, or searching functionality.
                    </li>

                            <li>In its second incarnation it involved the usage of MUI datatables for the filtering and sorting of data, and the inclusion of MongoDB for data storage</li>

                            <li>However, though data manipulation was greatly increased, data security was not.</li>

                            <li>Now, in its third incarnation, History Lab has user authentication, a complex data entry, editing, retrieval, and manipulation system, as well as personal profiles, news feeds, and notifications</li>


                        </ol>
                    </div>
                    <h3>Login and User Authentication</h3>
                    {/* <div style={{ paddingTop: '350px' }} /> */}
                    <div>
                        <img alt='' className='centerimage' src={require("../assets/login.PNG")} />

                    </div>
                    <div>
                        <SyntaxComponent />
                    </div>

                    <div className='blockquote'>
                        <ul>
                            <li>Helllo</li>
                            <li>Helllo</li>
                            <li>Helllo</li>
                            <li>Helllo</li>
                            <li>Helllo</li>
                        </ul>
                    </div>

                    <div style={{ fontStyle: 'italic' }} className='blockquote'>
                        <p>Hello this is what I did</p>

                    </div>


                    <p className='paragraph'>I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing </p>
                    <div className='column'>
                        <Fieldset style={{ color: 'black' }} legend="Header">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
                        </Fieldset>
                        <br></br>
                        <Fieldset style={{ color: 'black' }} legend="Header">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
                        </Fieldset>
                        <br></br>
                        <Fieldset style={{ color: 'black' }} legend="Header">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
                        </Fieldset>
                    </div>
                </Fade>
            </div>


        </div>
        <BackButton url='/projects' />
    </MDBCard>
)

export default PortfolioPage;