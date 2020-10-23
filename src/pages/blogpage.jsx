import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { useHistory } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import BackButton from "../components/backbutton";

function BlogPage() {
  let history = useHistory();
  return (
    <div>
      {/* <Navigation /> */}
      <BreadcrumbsItem
        to={"/blog"}
        eventKey={2.1}
        compare={(a, b) => a.weight - b.weight}
      >
        Blog
      </BreadcrumbsItem>

      <MDBCard>
        <MDBCardBody style={{ paddingTop: "50px" }}>
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://hackernoon.com/drafts/im4m30bb.png"
                  alt=""
                />
                <a href="/blog/datastructures">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Datastructures: Arrays</strong>
              </h3>
              <p>
                Arrays are among the oldest data structures in the relatively
                short history of computer science. However, like all data
                structures, they have their strengths and their weaknesses. This
                post begins a series on data structures and algorithms, in the
                pursuit of technical expertise when programming.
              </p>

              <MDBBtn
                color="elegant"
                outline
                size="md"
                className="waves-light "
                onClick={() => {
                  history.push("/blog/datastructures");
                }}
              >
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="7">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Big O Notation pt. 1</strong>
              </h3>
              <p>
                If we want to understand data structures and algorithms we can't
                avoid Big O Notation and a bit of calculus. In this post I give
                a brief introduction to the topics of Big O, time complexity,
                and asymptotic bounds. I also briefly introduce liner and
                constant time complexity.
              </p>

              <MDBBtn
                color="elegant"
                size="md"
                outline
                className="waves-light "
                onClick={() => {
                  history.push("/blog/bigonotation");
                }}
              >
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg"
                  alt=""
                />
                <a href="/blog/bigonotation">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://miro.medium.com/max/12000/1*vol_miIXTo1rCelcwO7Mlg.jpeg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>How I learned to code</strong>
              </h3>
              <p>
                Tutorials, tutors, books, practice, persistence - here's how I
                learned JavaScript, React, and MongoDB.
              </p>

              <MDBBtn
                color="elegant"
                size="md"
                className="waves-light"
                outline
                onClick={() => {
                  history.push("/new-location");
                }}
              >
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
        <BackButton url="/home" />
      </MDBCard>
    </div>
  );
}

export default BlogPage;
