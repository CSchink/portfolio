import React from "react";
import Fade from "react-reveal/Fade";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { MDBBtn, MDBCard, MDBIcon, MDBSmoothScroll } from "mdbreact";

import SyntaxComponent from "../components/syntax";
import Header from "../components/header";
import BackButton from "../components/backbutton";

function CopyWritePage() {
  return (
    <MDBCard>
      <BreadcrumbsItem
        to={"/projects"}
        eventKey={2.1}
        compare={(a, b) => a.weight - b.weight}
      >
        Projects
      </BreadcrumbsItem>
      <BreadcrumbsItem
        glyph="resume"
        to={"/projects/css"}
        eventKey={2.2}
        compare={(a, b) => a.weight - b.weight}
      >
        Portfolio with HTML and CSS
      </BreadcrumbsItem>
      <Header
        section="section1"
        title="Social Media App"
        intro="A social media app utilizing MongoDB, Apollo, Graphql, Express and React"
        src="https://www.codespot.org/assets/css.jpg"
      />

      {/* Section One  */}
      <div className="container">
        <div style={{ paddingTop: "300px" }}></div>
        <div id="section1">
          <Fade right>
            <h2>The Final Result</h2>
            <div
              style={{ textAlign: "center", width: "100%", fontSize: "20px" }}
            >
              <a href="https://infallible-pare-495ee5.netlify.app/index.html">
                Check it out on Netlify
              </a>
            </div>
            <img
              alt=""
              className="centerimage"
              src={require("../assets/portfoliohomepage.PNG")}
            />
            <Fade left>
              <MDBSmoothScroll to="section2">
                <MDBBtn rounded className="float-right" outline color="elegant">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll>
            </Fade>
          </Fade>
        </div>

        {/* End of Container */}
      </div>
    </MDBCard>
  );
}

export default CopyWritePage;
