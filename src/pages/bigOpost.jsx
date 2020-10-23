import React from "react";
import { Segment, Container, Header, Image, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import "./resume-styles.scss";
import BackButton from "../components/backbutton";
import Fade from "react-reveal/Fade";

function BigOpost() {
  return (
    <div className="container">
      <Container fluid style={{paddingTop: '20px'}}>
        <BreadcrumbsItem
          to={"/blog"}
          eventKey={2.1}
          compare={(a, b) => a.weight - b.weight}
        >
          Blog
        </BreadcrumbsItem>
        <BreadcrumbsItem
          glyph="resume"
          to={"/blog/bigonotation"}
          eventKey={2.2}
          compare={(a, b) => a.weight - b.weight}
        >
          Big O Notation
        </BreadcrumbsItem>
        <Header as="h1">Big O Notation</Header>
        <div style={{ paddingTop: "15px" }} />
        
        <Segment>
          <Image
            src="https://miro.medium.com/max/466/1*WRQYD7LKGfwi3rI9iEBEeQ.png"
            centered
            size="big"
          />

          <Header as="h2">Overview</Header>
          <div style={{ paddingTop: "10px" }} />
          <p>
            When we start out on our quest to learn computer science we
            inevitably come across Big O Notation. And, unless we possess a
            degree in mathematics or a natural aptitude for it, we are bound to
            be intimidated by it. Just one look at the chart above can give us
            'textbook burnout', as my friends in higher education have phrased
            it.
          </p>
          <p>
            However, if we want to advance in programming and understand the
            theory behind what we're doing, we learn to get over our limitations
            and solve problems bit by bit - no pun intended. And Big O Notation,
            though complex, is not that complicated to understand. So in this
            post we're going to go over it, get our foot in the door, and
            advance our understanding of this fundamental concept in computer
            science.
          </p>

          <Header as="h3">Why Big O Notation?</Header>
          <p>
            With the exponential increase in user data since the dawn of the
            internet generation, accessing, searching, inserting, and deleting
            that data must be done in as efficient a manner as possible.
          </p>
          <p>
            For example, writing an algorithm for a small company that will
            only, one imagines, be used by a handful of people, will behave
            differently if it is written by a Google engineer for a product that
            will be used by millions of people, possibly billions of times a
            day.
          </p>
          <p>This is where Big O notation comes in.</p>

          <Header as="h2">Big O Notation</Header>
          <div style={{ paddingTop: "10px" }} />
          <p>
            Big O notation is part of the family of asymptotic analysis, which
            is a way of describing limiting behavior, in this case the limiting
            behavior of algorithms under heavy workloads.
          </p>
          <p>
            Before we go forward let's define our terms a bit. An algorithm is a
            set of rules to be followed, a way of organizing behavior in order
            to achieve a pre-determined goal. One way to understand Big O
            notation is to understand that, every time an algorithm on a
            computer is run, it takes up resources. Therefore, the number of
            operations a function must process can, and often does, change with
            an increase in data.
          </p>

          <p>
            Big O is the accepted method of determining the upper bound of this
            resource-intensive process. Or, in layman's terms, it concerns how
            an increase in work impacts an algorithm's functioning. With this in
            mind, it becomes clear how important it is to know this upper bound
            in order to determine the scalability of a given algorithm.
          </p>

          <Image
            src="https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg"
            centered
            size="large"
          />
          <p>
            In the above image we see that, along the x axis, we have 'elements'
            and, along the y axis, we have 'operations'. This is due to the
            primary importance of the relationship between the number of
            elements within a given data structure and the number of operations
            the algorithm must perform on those elements. This is also referred
            to as "Time Complexity". Wikipedia defines it as:
          </p>
          <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>
            <Card fluid>
              <Card.Content>
                <p>
                  In computer science, the time complexity is the computational
                  complexity that describes the amount of time it takes to run
                  an algorithm. Time complexity is commonly estimated by
                  counting the number of elementary operations performed by the
                  algorithm, supposing that each elementary operation takes a
                  fixed amount of time to perform. Thus, the amount of time
                  taken and the number of elementary operations performed by the
                  algorithm are taken to differ by at most a constant factor.
                </p>
                <a href="https://en.wikipedia.org/wiki/Time_complexity">
                  <p style={{ fontStyle: "italic" }}>Wikipedia</p>{" "}
                </a>
              </Card.Content>
            </Card>
          </div>
          <p>
            In some cases the increase in the number of elements results in an
            increase in operations. In other cases the increase in elements has
            no impact on the increase in operations.
          </p>
          <p>
            This results in various categories derived from the behavior of
            algorithms being tested. Linear time, constant time, and logarithmic
            time are all examples.{" "}
          </p>
          <p>
            Here we will look at a couple examples in order to bring this very
            theoretical view back down to earth. We will begin with Linear Time.
          </p>
          <Header as="h2">Linear Time: O(n)</Header>

          <div style={{ paddingTop: "10px" }} />
          <p>
            Let's imagine a function that loops through an array of 10 items and
            pushes each item into another array. It's not resource-intensive -
            it seems quite harmless. However, when using Big O notation we
            assume the worst-case scenario. What will happen when thousands of
            elements are added to the array?
          </p>
          <p>
            In this situation the number of operations and number of elements
            increases hand in hand. With an increase in the size of the array
            the algorithm increases its operations. This is linear time; in Big
            O terminology it is written O(n), found in the bottom yellow
            quadrant on the chart to the left.
          </p>
          <Header as="h2">Constant Time: O(1)</Header>
          <div style={{ paddingTop: "10px" }} />
          <p>
            Imagine the following scenario: you are tasked with building an
            algorithm that returns the first item from a data structure. The
            algorithm performs the same regardless of whether there's two
            elements within the structure or several thousand.
          </p>
          <p>
            Since no matter how many elements are added to the data structure
            the number of operations performed by the algorithm remains
            constant, the result is constant time. In Big O notation this is
            formatted as 0(1)
          </p>
          <Header as="h2">Conclusion</Header>
          <p>
            Hopefully this post helped clear up a little bit of confusion
            regarding the theory and implementation behind Big O notation. It's
            very complicated, so look forward to more posts analyzing
            algorithms, elements and operations.
          </p>
          <Fade right>
            <BackButton url="/blog" />
          </Fade>
        </Segment>
      </Container>
    </div>
  );
}

export default BigOpost;
