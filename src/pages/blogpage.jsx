import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Navigation from "../components/navigation";
import { useHistory } from "react-router-dom";


function BlogPage () {
    let history = useHistory();
    return (
        <div>
            <Navigation />
            <MDBCard >
                <MDBCardBody>

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
                                Greg's MUI Datatables provide an excellent solution for developers requiring a sleek and responsive table design in their React project.  One drawback is the lack of a cascading filter element.  Join me on my quest to build one.
            </p>
                           
                            <MDBBtn color="primary" size="md" className="waves-light " onClick={() => { history.push('/new-location') }}>
                                Read more
            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                    <MDBRow>
                        <MDBCol lg="7">
                            <a href="#!" className="pink-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="image" className="pr-2" />
                Lifestyle
              </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Title of the news</strong>
                            </h3>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                blanditiis praesentium voluptatum deleniti atque corrupti quos
                                dolores et quas molestias excepturi sint occaecati cupiditate
                                non provident.
            </p>
                            <p>
                                by
              <a href="#!">
                                    <strong>Carine Fox</strong>
                                </a>
              , 14/08/2018
            </p>
                            <MDBBtn
                                color="pink"
                                size="md"
                                className="mb-lg-0 mb-4 waves-light"
                            >
                                Read more
            </MDBBtn>
                        </MDBCol>
                        <MDBCol lg="5">
                            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                <img
                                    className="img-fluid"
                                    src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
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
                            <a href="#!" className="indigo-text">
                                <h6 className="font-weight-bold mb-3">
                                    <MDBIcon icon="suitcase" className="pr-2" />
                Food
              </h6>
                            </a>
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>Title of the news</strong>
                            </h3>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                                sit amet.
            </p>
                            <p>
                                by
              <a href="#!">
                                    <strong>Carine Fox</strong>
                                </a>
              , 11/08/2018
            </p>
                            <MDBBtn color="indigo" size="md" className="waves-light ">
                                Read more
            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}

export default BlogPage;