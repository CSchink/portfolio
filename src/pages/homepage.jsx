import React from "react";
import Directory from "../components/directory";
import Fade from "react-reveal/Fade";
import { MDBCard, MDBJumbotron } from "mdbreact";

const HomePage = () => (
  <MDBCard>
    <MDBJumbotron fluid>
      <div className="container">
        <h1 className="h1 display-3">Welcome!</h1>
        <hr />
        <p>
          This portfolio highlights my knowledge and practical experience in
          both front and back end web development.
        </p>
      </div>
    </MDBJumbotron>
    <div className="projectspage">
      <Fade right>
        <Directory />
      </Fade>
    </div>
  </MDBCard>
);

export default HomePage;
