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
          title: "WordPress & React",
          imageUrl:
            "https://camo.githubusercontent.com/64906f3cafcc38a760b6528f4c317df717c1299d/68747470733a2f2f736e6970636172742e636f6d2f6d656469612f3230333837322f72656163742d776f726470726573732d726573742d6170692e6a7067",
          size: "large",
          id: 5,
          linkUrl: "/projects/wordpress",
        },
        {
          title: "Cascading Filters",
          imageUrl:
            "https://i.pinimg.com/originals/e9/a8/5b/e9a85b5a3a7f83d86a85a4c348938bd5.png",
          size: "large",
          id: 5,
          linkUrl: "/cascadingfilter",
        },
        // {
        //   title: "Machine Learning",
        //   imageUrl:
        //     "https://cubelogic.com/wp-content/uploads/2020/02/Python-is-it-true-what-they-say-1024x683.jpg",
        //   id: 1,
        //   linkUrl: "/projects/portfolio",
        // },
        {
          title: "Styling with CSS",
          imageUrl:
            "https://www.codespot.org/assets/css.jpg",
          size: "large",
          id: 5,
          linkUrl: "/projects/resume",
        },

        {
          title: "Editing Data in MUI Datatables",
          subtitle: "with JavaScript",
          imageUrl:
            "https://i.pinimg.com/originals/e9/a8/5b/e9a85b5a3a7f83d86a85a4c348938bd5.png",
          size: "large",
          id: 5,
          linkUrl: "/projects/resume",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.section.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default ProjectsDirectory;
