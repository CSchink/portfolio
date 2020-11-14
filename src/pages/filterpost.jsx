import { MDBBtn, MDBCard, MDBIcon, MDBSmoothScroll } from "mdbreact";
import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Header from "../components/header";
import Fade from "react-reveal/Fade";
import SyntaxComponent from "../components/syntax";

function FilterPost() {
  return (
    <div>
      <Header
        section="section1"
        title="Building a Cascading Filter"
        intro="Greg's MUI Datatables provide an excellent solution for developers requiring a sleek and responsive table design in their React project. One drawback is the lack of a cascading filter element. Join me on my quest to build one."
        src="https://i.pinimg.com/originals/e9/a8/5b/e9a85b5a3a7f83d86a85a4c348938bd5.png"
        demo="nowhere"
      />
      <BreadcrumbsItem
        to={"/projects"}
        eventKey={2.1}
        compare={(a, b) => a.weight - b.weight}
      >
        Projects
      </BreadcrumbsItem>
      <BreadcrumbsItem
        glyph="resume"
        to={"/cascadingfilter"}
        eventKey={2.2}
        compare={(a, b) => a.weight - b.weight}
      >
        Cascading Filter
      </BreadcrumbsItem>
      <div className='container'>
      <Fade left>
        <div style={{ paddingTop: "300px" }}></div>
        <div id="section1">
          <h2>
            <strong>Part one:</strong> Identifying the Problem
          </h2>
          <img
            alt=""
            className="centerimage"
            src="https://user-images.githubusercontent.com/19170080/38026128-eac9d506-3258-11e8-92a7-b0d06e5faa82.gif"
          />

          <MDBSmoothScroll to="section2">
            <MDBBtn rounded className="float-right" outline color="elegant">
              <MDBIcon icon="arrow-down" />
            </MDBBtn>
          </MDBSmoothScroll>
        </div>
      </Fade>
      <Fade right>
        <div style={{ paddingTop: "300px" }}></div>
        <div id="section2"></div>
        <div className="mycard">
        <h2>
        Cascading filters, also known as hierarchical filters, funnel user
        selection based on incremental selection. The first filter
        limits the second to only those values that remain relevant for the search criteria. It is
        vital for user experience, especially when dealing with a large
        dataset.
        </h2>
        <h2 >However, at the time of this writing (October 2020) MUI Datatables do
          not provide such built-in functionality. However, they provide
          everything necessary for the developer to build their own.</h2>

        <MDBSmoothScroll to="section3">
          <MDBBtn rounded className="float-right" outline color="white">
            <MDBIcon icon="arrow-down" />
          </MDBBtn>
        </MDBSmoothScroll>
        </div>

        <div style={{ paddingTop: "300px" }}></div>
        <p>Here is an example of a basic table utilization:</p>
        <div id="section3"></div>
         

        <SyntaxComponent text={`
        import MUIDataTable from "mui-datatables";
 
        const columns = ["Name", "Company", "City", "State"];
         
        const data = [
         ["Joe James", "Test Corp", "Yonkers", "NY"],
         ["John Walsh", "Test Corp", "Hartford", "CT"],
         ["Bob Herm", "Test Corp", "Tampa", "FL"],
         ["James Houston", "Test Corp", "Dallas", "TX"],
        ];
         
        const options = {
          filterType: 'checkbox',
        };
         
        <MUIDataTable
          title={"Employee List"}
          data={data}
          columns={columns}
          options={options}
        />
        `} />
        <MDBSmoothScroll to="section4">
          <MDBBtn rounded className="float-right" outline color="elegant">
            <MDBIcon icon="arrow-down" />
          </MDBBtn>
        </MDBSmoothScroll>

        <div style={{ paddingTop: "300px" }}></div>
        <div id="section4"></div>
        <h2>Exploring the Table's Built-In Functionality</h2>
        <p className='paragraph'>
          This is found in the<strong><a href="https://www.npmjs.com/package/mui-datatables">MUI Datatables documentation</a></strong>on the<strong> onFilterChange</strong> method.
             As we read there, it's a callback function that triggers when filters have
            changed:
        </p>
        <div>
          <SyntaxComponent
            text={` 
            function(changedColumn: string, filterList: array, 
            type: enum('checkbox', 'dropdown', 'multiselect', 'textField', 'custom', 'chip', 'reset'), 
            changedColumnIndex, displayData) => void`}
          />
        </div>

        <MDBSmoothScroll to="section5">
          <MDBBtn rounded className="float-right" outline color="elegant">
            <MDBIcon icon="arrow-down" />
          </MDBBtn>
        </MDBSmoothScroll>
        <div style={{ paddingTop: "300px" }}></div>
        <div id="section5"></div>
      </Fade>
    </div>
    </div>
  );
}

export default FilterPost;
