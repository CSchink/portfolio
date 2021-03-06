import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage";
import Resume from "./pages/resume";
import ProjectsPage from "./pages/projectspage";
import BlogPage from "./pages/blogpage";
import Header from "./components/header";
import Jump from "react-reveal/Jump";
import { Breadcrumbs, BreadcrumbsItem } from "react-breadcrumbs-dynamic";
// import CrumbIconItem from './components/CrumbIconItem';
// import { base_path } from './constants'
import FilterPost from "./pages/filterpost";
import { MDBCard, MDBNav } from "mdbreact";
import Navigation from "./components/navigation";
import PortfolioPage from "./pages/portfoliopage";
import Timeline from "./components/timeline";
import BlogDirectory from "./components/blogdirectory";
import GraphqlPage from "./pages/graphqlpage";
import ArraysPost from "./pages/datastructurespost";
import BigOpost from "./pages/bigOpost";
import CopyWritePage from "./pages/copywritecss";

function App() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Navigation />
      <div
        style={{
          position: "absolute",
          width: "auto",
          top: "4",
          zIndex: "1",
          right: "0",
          alignItems: "right",
        }}
      >
        <Jump>
          <MDBCard>
            <Breadcrumbs
              separator={<b> / </b>}
              // container={MDBNav}
              finalProps={{ active: true }}
              duplicateProps={{ to: "href" }}
            />
          </MDBCard>
        </Jump>
      </div>

      <BreadcrumbsItem
        to={"/"}
        eventKey={1}
        compare={(a, b) => a.weight - b.weight}
      >
        Home
      </BreadcrumbsItem>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route exact path="/projects/historylab" component={Resume} />
        <Route exact path="/projects/resume" component={Timeline} />
        <Route exact path="/projects/wordpress" component={PortfolioPage} />
        <Route exact path="/projects" component={ProjectsPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/projects/cascadingfilter" component={FilterPost} />
        <Route exact path="/projects/graphql" component={GraphqlPage} />
        <Route exact path="/blogdirectory" component={BlogDirectory} />
        <Route exact path="/blog/datastructures" component={ArraysPost} />
        <Route exact path="/blog/bigonotation" component={BigOpost} />
        <Route exact path="/projects/css" component={CopyWritePage} />
        
      </Switch>
    </div>
  );
}

export default App;
