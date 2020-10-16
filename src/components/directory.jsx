import React, { Component } from "react";
import MenuItem from "./menu-item";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "Projects",
          imageUrl:
            "https://www.brightnetwork.co.uk/media/ckeditor/2017/03/09/markus-spiske-207946-1.jpg",
          id: 1,
          linkUrl: "/projects",
        },

        {
          title: "Blog",
          imageUrl:
            "https://brayve.net/wp-content/uploads/2020/03/15715/how-to-write-a-blog-post-a-step-by-step-guide-free-blog-post-templates.jpg-23keepProtocol",
          size: "large",
          id: 5,
          linkUrl: "/blog",
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

export default Directory;
