import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage';
import Resume from './pages/resume';
import ProjectsPage from './pages/projectspage';
import BlogPage from './pages/blogpage';
import Header from './components/header';
import { Breadcrumbs, BreadcrumbsItem } from 'react-breadcrumbs-dynamic';
// import CrumbIconItem from './components/CrumbIconItem';
// import { base_path } from './constants'
import FilterPost from './pages/filterpost';
import { MDBNav } from 'mdbreact';

function App() {
  return (
    <div>
      <div style={{paddingTop: '20px', paddingLeft: '10px'}}>
      <Breadcrumbs
        separator={<b> / </b>}

        container={MDBNav}
        finalProps={{ active: true }}
        duplicateProps={{ to: 'href' }}
      />
 </div>
 <BreadcrumbsItem to={'/home'} eventKey={1} compare={(a,b)=>a.weight-b.weight} >
        Home
        </BreadcrumbsItem>
  
       
       
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/home' component={HomePage} />
        <Route exact path='/projects/resume' component={Resume} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/blog' component={BlogPage} />
        <Route exact path='/cascadingfilter' component={FilterPost} />
      </Switch>
      
    </div>
  );
}

export default App;
