import { MDBCard } from "mdbreact";
import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Header from "../components/header";
import SyntaxComponent from "../components/syntax";
import "./resume-styles.scss";
function FilterPost() {
  return (
    <div>
      <Header
        section="section1"
        title="Building a Cascading Filter"
        intro="It's just as difficult as you'd imagine"
        src="https://i.pinimg.com/originals/e9/a8/5b/e9a85b5a3a7f83d86a85a4c348938bd5.png"
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

      <MDBCard id="section1" style={{ paddingTop: "80px" }}>
        <h1 className="heading"> Part 1 </h1>
        <h3 style={{ textAlign: "center" }}>Identifying the Problem</h3>
        <p>
          Cascading filters, also known as hierarchical filters, funnel user
          selection based on incremental user selection. The first filter limits
          the second to only those values that are now relevant. It is vital for
          user experience, especially when dealing with a large dataset.
        </p>
        <p>
          However, at the time of this writing (October 2020) MUI Datatables do
          not provide such built-in functionality. However, they provide
          everything necessary for the developer to build their own.
        </p>
        <br></br>
        <h3>Exploring the Table's Built-In Functionality</h3>
        <p>
          This is from{" "}
          <a href="https://www.npmjs.com/package/mui-datatables">
            MUI Datatables documentation on the <strong>onFilterChange</strong>{" "}
            method
          </a>
        </p>
        <p className="blockquote">
          Callback function that triggers when filters have changed.
        </p>
        <SyntaxComponent
          text={` 
                function(changedColumn: string, filterList: array, 
                type: enum('checkbox', 'dropdown', 'multiselect', 'textField', 'custom', 'chip', 'reset'), 
                changedColumnIndex, displayData) => void`}
        />
      </MDBCard>
    </div>
  );
}

export default FilterPost;
