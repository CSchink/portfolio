import React from "react";
import Directory from "../components/directory";
import Fade from "react-reveal/Fade";
import { MDBCard, MDBJumbotron } from "mdbreact";
import { Image } from "semantic-ui-react";
import "../components/AppPage.css";

const HomePage = () => (
  <div>
    <div className="frontpage">
    <MDBJumbotron fluid >
      
      <div className="container" >
      <Image  src="https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/49132474_2138775929476813_6892757537473429504_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=SgmM7udBza8AX-DiRBM&_nc_ht=scontent.flhr4-2.fna&oh=0d14d24c77a1b43b1a28f5e6a8fab20e&oe=5FB06C92" style={{zIndex: '1'}} circular floated='left' size='small'/>
        <h1 className="h1 display-3">Welcome</h1>
        <hr />
        <p>
          This portfolio highlights my knowledge and practical experience in
          both front and back end web development.
        </p>
      </div>
    </MDBJumbotron>
    </div>
    <div className="projectspage">
      <Fade right>
        <Directory />
      </Fade>
    </div>
  </div>
);

export default HomePage;
