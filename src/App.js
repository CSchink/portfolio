import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage';
import Resume from './pages/resume';
import ProjectsPage from './pages/projectspage';
import BlogPage from './pages/blogpage';


function App() {
  return (
    <div>
     
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={ProjectsPage} />
        <Route path='/blog' component={BlogPage} />
      </Switch>
    </div>
  );
}

export default App;
