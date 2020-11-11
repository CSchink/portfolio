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
        <Fade left>
          <div style={{ paddingTop: "300px" }}></div>
          <div id="section2" style={{ paddingTop: "80px" }}>
            <div className="mycard">
              <h2>
                This website does not contain the use of any UI libraries.
              </h2>
              <h2>
                Instead it utilizes CSS for all positioning, styling, and
                animations
              </h2>
            </div>
            <Fade right>
              <MDBSmoothScroll to="section3">
                <MDBBtn rounded className="float-right" outline color="elegant">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll>
            </Fade>
          </div>
        </Fade>
        {/* Section 3 */}
        <div style={{ paddingTop: "300px" }}></div>
        <div id="section3"></div>

        <Fade right>
          <h2>For example the following display:</h2>
          <img
            alt=""
            className="centerimage"
            src={require("../assets/cssportfolio1.PNG")}
          />

          <MDBSmoothScroll to="section4">
            <MDBBtn className="float-right" rounded outline color="elegant">
              <MDBIcon icon="arrow-down" />
            </MDBBtn>
          </MDBSmoothScroll>
        </Fade>

        <div style={{ paddingTop: "300px" }}></div>
        <div id="section4"></div>
        <h2>Utilizes a basic card:</h2>

        <SyntaxComponent
          text={`
        .card {
            background-color: #fff;
            color: #333;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            padding: 20px;
            margin: 10px;
          }
         `}
        />

        <MDBSmoothScroll to="section5">
          <MDBBtn rounded className="float-right" outline color="elegant">
            <MDBIcon icon="arrow-down" />
          </MDBBtn>
        </MDBSmoothScroll>
        <div style={{ paddingTop: "200px" }}></div>
        <div id="section5">
          <h2>And a container and grid styling of:</h2>
        </div>

        <SyntaxComponent
          text={`
        .container {
            max-width: 1100px;
            margin: 0 auto;
            overflow: auto;
            padding: 0 40px;
        }
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          `}
        />
        <MDBSmoothScroll to="section7">
          <MDBBtn rounded className="float-right" outline color="elegant">
            <MDBIcon icon="arrow-down" />
          </MDBBtn>
        </MDBSmoothScroll>
        <div style={{ paddingTop: "200px" }}></div>
        <div id="section7">
          <Fade right>
            <h2>
              And all of the animations utilize @keyframe for simple yet elegant
              effectiveness:
            </h2>
            <SyntaxComponent
              text={`
        @keyframes slideInFromLeft {
                0% {
                    transform: translateX(-100%);
                }

                100% {
                    transform: translateX(0);
                }
        }`}
            />
            <MDBSmoothScroll to="section8">
              <MDBBtn rounded className="float-right" outline color="elegant">
                <MDBIcon icon="arrow-down" />
              </MDBBtn>
            </MDBSmoothScroll>
          </Fade>
        </div>

        <div style={{ paddingTop: "200px" }}></div>
        <div id="section8">
          <Fade left>
            <div className="mycard">
                <h2>Finally, media queries ensure that display is adjusted for all ports, from tablets </h2>
            </div>
            <SyntaxComponent text={`
            @media (max-width: 768px) {
                .grid,
                .showcase .grid,
                .stats .grid,
                .cli .grid,
                .cloud .gridm {
                  grid-template-columns: 1fr;
                  grid-template-rows: 1fr;
                }
              
                .showcase {
                  height: auto;
                }
                .showcase-text {
                  text-align: center;
                  margin-top: 40px;
                }
                .showcase-form {
                  justify-self: center;
                  margin: auto;
                }
                .cli .grid > *:first-child {
                  grid-column: 1;
                  grid-row: 1;
                }
              }
            `}/>
          </Fade>
          <MDBSmoothScroll to="section9">
          <MDBBtn rounded className="float-right" outline color="elegant">
                <MDBIcon icon="arrow-down" />
              </MDBBtn>
            </MDBSmoothScroll>
        </div>


        <div style={{ paddingTop: "200px" }}></div>
        <div id="section9">
            <div className="mycard"><h2>to mobile</h2></div>
        <SyntaxComponent
              text={`          
          /* Mobile */
          
          @media (max-width: 500px) {
            .navbar {
              height: 110px;
            }
            .navbar .flex {
              flex-direction: column;
            }
            .navbar ul {
              padding: 10px;
              background-color: rgba(0, 0, 0, 0.1);
            }
          }
          `}
            />
        <BackButton url="/projects" />
        </div>
        {/* End of Container */}
      </div>
    </MDBCard>
  );
}

export default CopyWritePage;
