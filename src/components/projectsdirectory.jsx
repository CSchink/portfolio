import React, { Component } from "react";
import MenuItem from "./menu-item";

class ProjectsDirectory extends Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "History Lab",
          imageUrl: "https://i.morioh.com/67feeaf72f.png",
          size: "large",
          id: 5,
          linkUrl: "/projects/resume",
        },
        {
          title: "Cascading Filters",
          imageUrl:
            "https://i.pinimg.com/originals/e9/a8/5b/e9a85b5a3a7f83d86a85a4c348938bd5.png",
          size: "large",
          id: 5,
          linkUrl: "/cascadingfilter",
        },
        {
          title: "Machine Learning",
          imageUrl:
            "https://i0.wp.com/everyday.codes/wp-content/uploads/2019/12/newpythonlogo.png?fit=1024%2C500&ssl=1",
          id: 1,
          linkUrl: "/projects/portfolio",
        },
        {
          title: "Web Scraper",
          imageUrl:
            "https://i0.wp.com/everyday.codes/wp-content/uploads/2019/12/newpythonlogo.png?fit=1024%2C500&ssl=1",
          size: "large",
          id: 5,
          linkUrl: "/projects/resume",
        },
        {
          title: "Editing Data in MUI Datatables",
          imageUrl:
            "https://i.pinimg.com/originals/e9/a8/5b/e9a85b5a3a7f83d86a85a4c348938bd5.png",
          size: "large",
          id: 5,
          linkUrl: "/projects/python",
        },
        {
          title: "GraphQL",
          imageUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--_HAFrKTk--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://thepracticaldev.s3.amazonaws.com/i/oqz1tsx4no5cy3rteav1.png",
          size: "large",
          id: 5,
          linkUrl: "/projects/resume",
        },
      ],
    };
  }

  render() {
    return (
      <div className="projects-directory-menu">
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default ProjectsDirectory;
