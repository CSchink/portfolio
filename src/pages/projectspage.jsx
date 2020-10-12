import React from 'react';
import Navigation from '../components/navigation';
import ProjectsDirectory from '../components/projectsdirectory';
import './projectspage-styles.scss'


const ProjectsPage = () => (
    <div>
        <Navigation />
        <div className='projectspage' style={{paddingTop: '20px + !important'}}>
            <ProjectsDirectory />
        </div>
    </div>
)

export default ProjectsPage;