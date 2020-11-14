import React from "react";
import ProjectsDirectory from "../components/projectsdirectory";
import "./projectspage-styles.scss";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { MDBCard } from "mdbreact";

const ProjectsPage = () => (
  <div style={{ paddingTop: '30px', paddingBottom: "100px" }}>
    <BreadcrumbsItem glyph="user" to={"/projects"} eventKey={1.1}>
      Projects
    </BreadcrumbsItem>
    <div className="directory" style={{ paddingTop: "20px" }}>
      <ProjectsDirectory />
    </div>
  </div>
);

export default ProjectsPage;
