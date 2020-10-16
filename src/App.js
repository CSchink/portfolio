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
        <Route exact path="/projects/resume" component={Resume} />
        <Route exact path="/projects/wordpress" component={PortfolioPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route exact path="/cascadingfilter" component={FilterPost} />
      </Switch>
    </div>
  );
}

export default App;
