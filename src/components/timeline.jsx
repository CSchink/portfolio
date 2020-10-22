import { MDBIcon } from "mdbreact";
import React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Header from "./header";

function Timeline() {
  return (
    <div>
      <BreadcrumbsItem
        to={"/projects"}
        eventKey={2.1}
        compare={(a, b) => a.weight - b.weight}
      >
        Projects
      </BreadcrumbsItem>
      <BreadcrumbsItem
        glyph="resume"
        to={"/projects/resume"}
        eventKey={2.2}
        compare={(a, b) => a.weight - b.weight}
      >
        Resume
      </BreadcrumbsItem>
      <Header
        section="section1"
        title="Resume"
        intro="A summary of my experience"
        src="https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/49132474_2138775929476813_6892757537473429504_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=SgmM7udBza8AX-DiRBM&_nc_ht=scontent.flhr4-2.fna&oh=0d14d24c77a1b43b1a28f5e6a8fab20e&oe=5FB06C92"
      />
      <div style={{ paddingTop: "100px" }}></div>
      <div id="section1"></div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2017 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MDBIcon />}
        >
          <h3 className="vertical-timeline-element-title">Programming</h3>
          <h4 className="vertical-timeline-element-subtitle">North Carolina</h4>
          <p>
            Utilized MongoDB, React, Express, JavaScript, CSS, Apollo and
            GraphQL to develop various applications.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2015"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MDBIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Project Management Exp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Sioux City, IA</h4>
          <p>
            Trained in project management at Briar Cliff University. Initiated a
            change process for the Council on Sexual Assault and Domestic
            Violence, revamping and modernizing their children's program
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2013"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MDBIcon />}
        >
          <h3 className="vertical-timeline-element-title">Education</h3>
          <h4 className="vertical-timeline-element-subtitle">Sioux City, IA</h4>
          <p>
            Graduated Magna Cum Laude with a special award for Social Justice
            initiative from Briar Cliff University
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
