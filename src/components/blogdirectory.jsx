import React, { Component } from "react";
import MenuItem from "./menu-item";

class BlogDirectory extends Component {
  constructor() {
    super();

    this.state = {
      section: [
        {
          title: "Programming",
          imageUrl:
            "https://www.timeshighereducation.com/sites/default/files/computer_programming.jpg",
          id: 1,
          linkUrl: "/programming",
        },

        {
          title: "Philosophy",
          imageUrl:
            "https://media.newyorker.com/photos/5909675d019dfc3494ea0dd0/master/pass/120409_r22060_g2048.jpg",
          size: "large",
          id: 5,
          linkUrl: "/history",
        },
        {
          title: "Chemistry",
          imageUrl:
            "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1537198485721_mainnews2012_x1.jpg",
          size: "large",
          id: 5,
          linkUrl: "/history",
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

export default BlogDirectory;
