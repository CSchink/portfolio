import React from "react";
import Directory from "../components/directory";
import Fade from "react-reveal/Fade";
import { MDBCard, MDBIcon, MDBJumbotron } from "mdbreact";
import { Image } from "semantic-ui-react";
import "../components/AppPage.css";

const HomePage = () => (
  <div>
    <div>
      {/* <MDBJumbotron fluid > */}

    
      <div className="frontcard" style={{textAlign:'center'}}>
        <h1 className='h1 display-3'>Welcome</h1>
        <hr />
        <p style={{ fontSize: "18px" }}>
          This portfolio highlights my knowledge and practical experience in
          both front and back end web development.
        </p>
        <div className="icon" style={{color: 'white'}}>
      <MDBIcon fab icon="react" size='6x'/>
      <MDBIcon fab icon="python" size='6x'/>
      <MDBIcon fab icon="node" size='6x'/>
      <MDBIcon fab icon="mongodb" size='6x'/>
      <MDBIcon icon="database" size='6x' />
      <MDBIcon fab icon="html5" size='6x' />
      <MDBIcon fab icon="css3-alt" size='6x' />
      </div>
      </div>
      
      {/* <div className="frontcard">
     
      </div> */}
        {/* <Image
          src="https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/49132474_2138775929476813_6892757537473429504_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=SgmM7udBza8AX-DiRBM&_nc_ht=scontent.flhr4-2.fna&oh=0d14d24c77a1b43b1a28f5e6a8fab20e&oe=5FB06C92"
          style={{ zIndex: "1" }}
          centered
          size="small"
        /> */}
        {/* <ul style={{ listStyle: "none", fontSize: "20px", paddingRight:'0px !important' }}>
          <a href="">
            <li style={{color: 'white'}}> Resume</li>
          </a>
          <a href=""> 
          <li style={{color: 'white'}}>
            LinkedIn
          </li>
          </a>
          <a alt='GitHub' href=""> 
          <li style={{color: 'white'}}>
            GitHub
          </li>
          </a>
        </ul> */}
      
      {/* </MDBJumbotron> */}
    </div>
    <div className="projectspage">
      <Fade right>
        <Directory />
      </Fade>
    </div>
  </div>
);

export default HomePage;
