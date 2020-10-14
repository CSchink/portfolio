import React from "react";
import Directory from "../components/directory";
import "./homepage.styles.scss";
import "./projectspage-styles.scss";
import { MDBCard, MDBJumbotron } from "mdbreact";

const HomePage = () => (
  <MDBCard>
    <MDBJumbotron>
      <h2 className="h1 display-3">Welcome!</h2>

      <hr />
      <p>
        <strong>
          This single page web app showcases my knowledge (blog) and practical
          experience (projects) in both front and back end web development.
        </strong>
      </p>
    </MDBJumbotron>
    <div className="projectspage">
      <Directory />
    </div>
  </MDBCard>
);

export default HomePage;
