import React from 'react';
import { MDBIcon, MDBNavItem } from 'mdbreact';
import '../pages/resume-styles.scss'

const ContactList = () => (
    <div>
        <div className='sidebar'><MDBNavItem>
            <a href="https://www.linkedin.com/in/corey-schink-35a64699/" target='_blank' rel="noreferrer noopener" ><MDBIcon fab icon="linkedin" /></a>
        </MDBNavItem>
            <MDBNavItem>
                <a href="https://github.com/CSchink/" target='_blank' rel="noreferrer noopener" ><MDBIcon fab icon="github" /></a>
            </MDBNavItem></div>
    </div>
)

export default ContactList;