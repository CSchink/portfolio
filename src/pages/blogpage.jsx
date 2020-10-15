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
                  src="https://codesandbox.io/api/v1/sandboxes/0qx6yljwlv/screenshot.png"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Building a Cascading Filter for MUI Datatables</strong>
              </h3>
              <p>
                Greg's MUI Datatables provide an excellent solution for
                developers requiring a sleek and responsive table design in
                their React project. One drawback is the lack of a cascading
                filter element. Join me on my quest to build one.
              </p>

              <MDBBtn
                color="elegant"
                size="md"
                className="waves-light "
                onClick={() => {
                  history.push("/cascadingfilter");
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
                <strong>How to edit data in MUI Datatables</strong>
              </h3>
              <p>
                In this post I highlight one effective way I've found to quickly
                and easily edit data within MUI Datatables
              </p>

              <MDBBtn
                color="elegant"
                size="md"
                className="waves-light "
                onClick={() => {
                  history.push("/new-location");
                }}
              >
                Read more
              </MDBBtn>
            </MDBCol>
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://brianhann.com/wp-content/uploads/2015/03/ui-grid-modal-row-editor.png"
                  alt=""
                />
                <a href="#!">
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
                  src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
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
                className="waves-light "
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
