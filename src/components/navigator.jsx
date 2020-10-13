import React from 'react'
import { Breadcrumbs, BreadcrumbsItem } from 'react-breadcrumbs-dynamic'
import { Route, Switch } from 'react-router-dom'
import BlogPage from '../pages/blogpage'
import HomePage from '../pages/homepage'
import ProjectsPage from '../pages/projectspage'
import Resume from '../pages/resume'
import Header from './header'

const Navigator = ({ children }) => (
<div>
      <div style={{paddingTop: '20px', paddingLeft: '10px'}}>
      <Breadcrumbs
        separator={<b> / </b>}

        // container={BootstrapBreadcrumb}
        finalProps={{ active: true }}
        duplicateProps={{ to: 'href' }}
      />
 </div>
 <BreadcrumbsItem to={'/home'} compare={(a,b)=>a.weight-b.weight} >
        
        </BreadcrumbsItem>
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/home' component={HomePage} />
        <Route exact path='/projects/resume' component={Resume} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/blog' component={BlogPage} />
      </Switch>
      
    </div>


)

export default Navigator;
