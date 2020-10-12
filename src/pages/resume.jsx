import React from 'react'
import { Fieldset } from 'primereact/fieldset';
import './resume-styles.scss'
import 'primereact/resources/themes/saga-blue/theme.css';
import SyntaxComponent from '../components/syntax';
import ContactList from '../components/contactlist';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

const Resume = () => (
    <div 
    // style={{
    //     borderLeft: '10px solid black',
    //     margin: '1.5em 10px',
    //     padding: '0.5em 10px',
    //     borderRight: '10px solid black',
    //     marginRight: '1.5em 10px',
    //     paddingRight: '0.5em 10px'
    // }}
    >
        <div id="left"></div>
<div id="right"></div>
<div id="top"></div>
<div id="bottom"></div>
        <header style={{
            background: "linear-gradient(rgba(28, 118, 207, 0.6), rgba(19, 173, 173, 0.6)"
        }}></header>

        <div>

            <div className='container '>
                
                <div className='sidebar'>
                    <ContactList/>
                </div>

                <h1 style={{
                    paddingTop: '60px'
                }}> Experience </h1>

                

                <p className='paragraph'>I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing </p>
                
                <img alt='' className='centerimage' src='https://scontent.flhr1-2.fna.fbcdn.net/v/t1.0-9/49132474_2138775929476813_6892757537473429504_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=R2IwcxTXI9UAX-722Yv&_nc_ht=scontent.flhr1-2.fna&oh=8d4044c723e94763333f48aca7d51604&oe=5FA48F12' />
           
                <SyntaxComponent/>
                
                <div className='blockquote'>
                    <ul>
                        <li>Helllo</li>
                        <li>Helllo</li>
                        <li>Helllo</li>
                        <li>Helllo</li>
                        <li>Helllo</li>
                    </ul>
                </div>
                <div style ={{fontStyle:'italic'}}className='blockquote'>
                    <p>Hello this is what I did</p>

                </div>
                <p className='paragraph'>I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thing I am a thingI am a thing I am a thing </p>
                <div className='column'>
                    <Fieldset style={{color: 'black'}} legend="Header">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
                    </Fieldset>
                    <br></br>
                    <Fieldset style={{color: 'black'}} legend="Header">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
                    </Fieldset>
                    <br></br>
                    <Fieldset style={{color: 'black'}} legend="Header">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           </p>
                    </Fieldset>
                </div>
            </div>


        </div>

    </div>
)

export default Resume;