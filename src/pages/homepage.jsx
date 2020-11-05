import React from "react";
import Directory from "../components/directory";
import Fade from "react-reveal/Fade";
import { MDBCard, MDBJumbotron } from "mdbreact";

const HomePage = () => (
  <MDBCard>
    <MDBJumbotron fluid >
      <h1 className="h1 display-3">Welcome!</h1>
      <hr />
      <p>
        <strong>
          This single page web app showcases my knowledge (blog) and practical
          experience (projects) in both front and back end web development.
        </strong>
      </p>
    </MDBJumbotron>
    <div className="projectspage">
      <Fade right>
        <Directory />
      </Fade>
    </div>
  </MDBCard>
);

export default HomePage;
