import React from "react";
import "./homepage.styles.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import SyntaxComponent from "../components/syntax";
import Fade from "react-reveal/Fade";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { MDBBtn, MDBCard, MDBIcon, MDBSmoothScroll } from "mdbreact";
import Header from "../components/header";
import BackButton from "../components/backbutton";

const Resume = () => (
  <MDBCard>
    <Header
      section="section1"
      title="History Lab"
      intro="A comprehensive database for students of science and history"
      src="https://i.morioh.com/67feeaf72f.png"
      demo="https://quiet-sierra-70186.herokuapp.com/"
    />
    <div style={{ paddingTop: "300px" }}></div>

    <div>
      <BreadcrumbsItem
        to={"/projects"}
        eventKey={2.1}
        compare={(a, b) => a.weight - b.weight}
      >
        Projects
      </BreadcrumbsItem>
      <BreadcrumbsItem
        glyph="resume"
        to={"/projects/historylab"}
        eventKey={2.2}
        compare={(a, b) => a.weight - b.weight}
      >
        History Lab
      </BreadcrumbsItem>

      <div className="container">
        <Fade right>
          <div id="section1" className="mycard">
            <h2>
              As something of a history nerd I began this project with a simple
              goal in mind - create a place where I can catalog a vast amount of
              data, spanning centuries, into an easy-to-retrieve system
            </h2>
          </div>
        </Fade>
        {/* <Fade left>
          <MDBSmoothScroll to="section2">
                <MDBBtn rounded className="float-right" outline color="white">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll>
        </Fade> */}

        <div style={{ paddingTop: "20px" }}></div>
        {/* <div id="section2"> */}

        <Fade left>
          <div className="mycard gradient">
            <h2>
              History is an <span style={{ fontSize: "30px" }}>amazing</span>{" "}
              subject. But, for us amateurs, it's difficult to keep track of the
              vast amounts of data that historians sift through on a daily
              basis.
            </h2>
            <h2>
              That's why I created History Lab - a place where students,
              amateurs, and even professionals can access a wide swathe of data.
            </h2>
            
          </div>
          <div
          
          style={{
            textAlign: "center",
          }}
        >
          
            
         
        </div>
        </Fade>
        {/* <div style={{ paddingTop: "300px" }}></div>
              <div id="section3">
                <Fade right>
                  <MDBSmoothScroll to="section4">
                    <MDBBtn
                      rounded
                      className="float-right"
                      outline
                      color="white"
                    >
                      <MDBIcon icon="arrow-down" />
                    </MDBBtn>
                  </MDBSmoothScroll>
                </Fade>
              </div> */}
        {/* <div style={{ paddingTop: "300px" }}></div> */}
        {/* <div id="section4"> */}
        {/* <Fade right>
          <div className="mycard">
            <h2>
              In its second incarnation it involved the usage of MUI datatables
              for the filtering and sorting of data, and the inclusion of
              MongoDB for data storage.
            </h2>
            <h2>
              However, though data manipulation was greatly increased, data
              security was not.
            </h2>
          </div>
        </Fade> */}
        {/* <Fade right>
                  <MDBSmoothScroll to="section5">
                    <MDBBtn
                      rounded
                      className="float-right"
                      outline
                      color="white"
                    >
                      <MDBIcon icon="arrow-down" />
                    </MDBBtn>
                  </MDBSmoothScroll>
                </Fade> */}
        {/* </div> */}
        <div style={{ paddingTop: "300px" }}></div>
        {/* <div id="section5"> */}
        <Fade right>
          <div className="mycard">
            <h2>
              History Lab has user authentication,
              a complex data entry, editing, retrieval, and manipulation system,
              as well as personal profiles, news feeds, and notifications
            </h2>
          </div>
        </Fade>
        {/* <Fade right>
                  <MDBSmoothScroll to="section6">
                    <MDBBtn
                      rounded
                      className="float-right"
                      outline
                      color="white"
                    >
                      <MDBIcon icon="arrow-down" />
                    </MDBBtn>
                  </MDBSmoothScroll>
                </Fade> */}
        {/* </div> */}

        <div style={{ paddingTop: "300px" }}></div>
        {/* <div id="section6"> */}
        <Fade left>
          <h2>
            The login functionality first takes a simple form component. Upon
            form submission the Express server requests the relevant user
            documents from MongoDB.
          </h2>

          <div>
            <img
              alt=""
              className="centerimage"
              src={require("../assets/login.PNG")}
            />
          </div>
        </Fade>
        {/* </div> */}

        {/* <Fade right>
              <MDBSmoothScroll to="section7">
                <MDBBtn rounded className="float-right" outline color="elegant">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll>
            </Fade> */}
        <div style={{ paddingTop: "300px" }}></div>
        {/* <div id="section7"></div> */}
        <Fade right>
          <h2>Below is the user authentication code on the Express Server</h2>
          <SyntaxComponent
            text={`
      async function userCheck(client, username, password) {
              const cursor = await client.db("historylab").collection("logindata").find({});
              let results = await cursor.toArray();
              let confirmation = results.some(function (result) {
                  if (result.user === username && result.password === password) 
                  { return true; } 
                  else { return false; }
                      });
              return confirmation;
                  }
                    `}
          />
          {/* <MDBSmoothScroll to="section8">
                <MDBBtn className="float-right" rounded outline color="elegant">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll> */}
        </Fade>
        <div style={{ paddingTop: "300px" }}></div>
        {/* <div id="section8"></div> */}
        <Fade right>
          <h3 className="paragraph">
            Once the Express server retrieves confirmation from MongoDB that the
            username and password are correct sessionStorage is set with a token
            and notifications are retrieved from the database
          </h3>
          <SyntaxComponent
            text={`
    async function returnAccount(token) {
      const account = await getAccount({ user: username, password: password }, token);
      const notifications = await PusherContext.retrieveNotifications({User: account.user})
        accountContext.setAccount({
        user: account.user,
        image: account.image,
        notifications: notifications
        });
      
  }`}
          />

          {/* <MDBSmoothScroll to="section9">
                <MDBBtn className="float-right" rounded outline color="elegant">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll> */}
        </Fade>
        <div style={{ paddingTop: "300px" }}></div>
        {/* <div id="section9"></div> */}
        <Fade left>
          <h2>Finally, the profile page is displayed.</h2>
          <img
            alt=""
            className="centerimage"
            src={require("../assets/feedpage.PNG")}
          />
        </Fade>

        {/* <Fade right>
            <MDBSmoothScroll to="section10">
              <MDBBtn className="float-right" rounded outline color="elegant">
                <MDBIcon icon="arrow-down" />
              </MDBBtn>
            </MDBSmoothScroll>
          </Fade> */}
        <div style={{ paddingTop: "300px" }}></div>
        <div id="section10"></div>
        <Fade right>
          <h2>...and the news feed is populated</h2>

          <div>
            <img
              alt=""
              className="centerimage"
              src={require("../assets/feedpage2.PNG")}
            />
          </div>
        </Fade>
        <div></div>
        {/* <MDBSmoothScroll to="section11">
            <MDBBtn rounded className="float-right" outline color="elegant">
              <MDBIcon icon="arrow-down" />
            </MDBBtn>
          </MDBSmoothScroll> */}

        <div style={{ paddingTop: "300px" }}></div>
        <div id="section6"></div>
        <Fade right>
          <h2>
            ...and now the user can access the three tables, each painstakingly
            designed over 3 years to categorize scientific, historical, and
            philosophical data.
          </h2>
          <img
            alt=""
            className="centerimage"
            src={require("../assets/tables.PNG")}
          />
        </Fade>
        <div style={{ paddingTop: "20px" }}></div>
        <Fade right>
          <h2>
            They can enter data, edit it, and each interaction they make with
            the tables is recorded in MongoDB for use with the notifications
            system and news feed.
          </h2>
        </Fade>
        <div style={{ paddingTop: "100px" }}></div>
        
      </div>
    </div>
    <Fade right>
      <BackButton url="/projects" />
    </Fade>
  </MDBCard>
);

export default Resume;
