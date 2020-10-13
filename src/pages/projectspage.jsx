import React from 'react';
import ProjectsDirectory from '../components/projectsdirectory';
import './projectspage-styles.scss'
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import { MDBCard } from 'mdbreact';
import BackButton from '../components/backbutton';


const ProjectsPage = () => (
    <MDBCard style={{paddingBottom: '100px'}}>
    
        {/* <BreadcrumbsItem glyph='user' to={'/home'} eventKey={1}>
            Home
    </BreadcrumbsItem> */}
        <BreadcrumbsItem glyph='user' to={'/projects'} eventKey={1.1}>
            Projects
    </BreadcrumbsItem>
        <div className='projectspage' style={{ paddingTop: '70px' }}>
            <ProjectsDirectory />
        </div>
        <div><BackButton color='dark' url='/home'/></div>
        
    </MDBCard>
)

export default ProjectsPage;