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
import Navigation from './components/navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <div style={{position: 'sticky', zIndex: '1', textAlign: 'right'}}>
      <Breadcrumbs
        separator={<b> / </b>}

        // container={MDBNav}
        finalProps={{ active: true }}
        duplicateProps={{ to: 'href' }}
      />
 </div>
 <BreadcrumbsItem to={'/'} eventKey={1} compare={(a,b)=>a.weight-b.weight} >
        Home
        </BreadcrumbsItem>
  
       
       
      <Switch>
        <Route exact path='/' component={HomePage} />
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
