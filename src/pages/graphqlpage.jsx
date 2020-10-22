import React from "react";
import "./resume-styles.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import SyntaxComponent from "../components/syntax";
import Fade from "react-reveal/Fade";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import "../styles/navigation.css";
import { MDBBtn, MDBCard, MDBIcon, MDBSmoothScroll } from "mdbreact";
import Header from "../components/header";
import BackButton from "../components/backbutton";

const GraphqlPage = () => (
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
      to={"/projects/graphql"}
      eventKey={2.2}
      compare={(a, b) => a.weight - b.weight}
    >
      MERN and GraphQL
    </BreadcrumbsItem>
    <Header
      section="section1"
      title="Social Media App"
      intro="A social media app utilizing MongoDB, Apollo, Graphql, Express and React"
      src="https://www.freecodecamp.org/news/content/images/size/w2000/2020/04/cover-3.png"
    />
    <div style={{ paddingTop: "300px" }}></div>

    <div id="section1">
      <div className="container">
        <Fade right>
          <h2>The Final Result</h2>
          <img
            alt=""
            className="centerimage"
            src={require("../assets/graphqlcorey.PNG")}
          />

          <div>
            <Fade left>
              <MDBSmoothScroll to="section2">
                <MDBBtn rounded className="float-right" outline color="elegant">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll>
            </Fade>
          </div>
        </Fade>

        <Fade left>
          <div style={{ paddingTop: "300px" }}></div>
          <div id="section2">
              <h2>User Validation</h2>
            <p>
              Like History Lab, the Social Media app has a login form with validation:
            </p>
            <img
                alt=""
                className="centerimage"
                src={require("../assets/loginnormal.PNG")}
              />
            <Fade right>
              <MDBSmoothScroll to="section3">
                <MDBBtn rounded className="float-right" outline color="elegant">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll>
            </Fade>
            <div style={{ paddingTop: "300px" }}></div>
            <div id="section3"></div>
   
            <Fade right>
              <p>...and form validation</p>
              <img
                alt=""
                className="centerimage"
                src={require("../assets/graphqllogin.PNG")}
              />

              <MDBSmoothScroll to="section4">
                <MDBBtn className="float-right" rounded outline color="elegant">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll>
            </Fade>
          </div>

          <div style={{ paddingTop: "300px" }}></div>
          <div id="section4"></div>
          <Fade left>
          <p>...and user registration</p>
          <img
            alt=""
            className="centerimage"
            src={require("../assets/graphqlregister.PNG")}
          />
          </Fade>
          <Fade right>
            <MDBSmoothScroll to="section5">
              <MDBBtn className="float-right" rounded outline color="elegant">
                <MDBIcon icon="arrow-down" />
              </MDBBtn>
            </MDBSmoothScroll>
          </Fade>

          <div style={{ paddingTop: "300px" }}></div>
          <div id="section5"></div>
          <h2>Home Page</h2>
            <p>And, upon utilizing a valid login, the home page is displayed wth an input form for creating new posts.</p>
            <img
              alt=""
              className="centerimage"
              src={require("../assets/graphqlpersonal.PNG")}
            />
         
          <MDBSmoothScroll to="section6">
            <MDBBtn rounded className="float-right" outline color="elegant">
              <MDBIcon icon="arrow-down" />
            </MDBBtn>
          </MDBSmoothScroll>

          <div style={{ paddingTop: "200px" }}></div>
          <div id="section6">
          <p>...the user can comment on posts</p>
          <img
            alt=""
            className="centerimage"
            src={require("../assets/graphqlcomments.PNG")}
          />
            
          </div>
          <MDBSmoothScroll to="section7">
            <MDBBtn rounded className="float-right" outline color="elegant">
              <MDBIcon icon="arrow-down" />
            </MDBBtn>
          </MDBSmoothScroll>

          <div style={{ paddingTop: "300px" }}></div>
          <div id="section7"></div>
          <p>...and the profile page is personalized with your posts</p>

            <div>
              <img
                alt=""
                className="centerimage"
                src={require("../assets/graphqlcorey.PNG")}
              />
            </div>
            <Fade left>
              <MDBSmoothScroll to="section8">
                <MDBBtn rounded className="float-right" outline color="elegant">
                  <MDBIcon icon="arrow-down" />
                </MDBBtn>
              </MDBSmoothScroll>
            </Fade>
        </Fade>
      </div>
    </div>
    <div style={{ paddingTop: "300px" }}> </div>
    <div id="section8" style={{margin: 'auto'}}>
    <Fade right>
    <p className="paragraph">
              The following code is an example of a functional component built for profile page:
            </p>
            <SyntaxComponent
              text={
            ` 
              import { useQuery } from "@apollo/client";
              import React, { useContext } from "react";
              import { Container, Grid, Header, Transition } from "semantic-ui-react";
              import UserAvatar from "../components/avatar";
              import PostCard from "../components/postcard";
              import UserFeed from "../components/userfeed";
              import { AuthContext } from "../context/auth";
              import { FETCH_POSTS_QUERY } from "../util/graphql";
              
              function ProfilePage() {
                const { loading, data } = useQuery(FETCH_POSTS_QUERY);
                const user = useContext(AuthContext);
                return (
                  <div style={{ paddingTop: "20px" }}>
                    <Container fluid>
                      <Grid columns={2}>
                        <Grid.Row>
                          <Grid.Column>
                            <UserAvatar />
                          </Grid.Column>
              
                          <Grid.Column>
                            <Header as="h2">My Posts</Header>
                            {loading ? (
                              <h1>Loading posts..</h1>
                            ) : (
                              <Transition.Group>
                                {user &&
                                  data &&
                                  data.getPosts
                                    .filter((post) => post.username === user.user.username)
                                    .map((post) => (
                                      <Grid.Column
                                        width={6}
                                        style={{
                                          marginBottom: "20px",
                                          marginRight: "auto",
                                          marginLeft: "auto",
                                        }}
                                        key={post.id}
                                      >
                                        <PostCard post={post} />
                                      </Grid.Column>
                                    ))}
                              </Transition.Group>
                            )}
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Container>
                  </div>
                );
              }
              export default ProfilePage;
              `}
            />
      <BackButton url="/projects" />
    </Fade>
    </div>
  </MDBCard>
);

export default GraphqlPage;
