import React from "react";
import { Segment, Container, Header, Image, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import SyntaxComponent from "../components/syntax";

function ArraysPost() {
  const src =
    "https://www.cpomagazine.com/wp-content/uploads/2020/01/big-data-brings-challenges-beyond-the-capabilities-of-traditional-siems_1500.jpg";
  return (
    <div className="container">
      <BreadcrumbsItem
        to={"/blog"}
        eventKey={2.1}
        compare={(a, b) => a.weight - b.weight}
      >
        Blog
      </BreadcrumbsItem>
      <BreadcrumbsItem
        glyph="resume"
        to={"/blog/datastructures"}
        eventKey={2.2}
        compare={(a, b) => a.weight - b.weight}
      >
      Arrays
      </BreadcrumbsItem>
      <Container fluid style={{ paddingTop: "20px" }}>
        <Header as="h1">Arrays</Header>
        <div style={{ paddingTop: "20px" }} />

        <Segment>
          <Image src={src} size="large" centered />
          <Header as="h2">Overview</Header>
          <p>
            Data structures range in functionality and style, and each one of
            them are useful for various tasks. The purpose of this series of
            posts is to better understand which data structure to use under any
            given circumstance. As Linus Torvalds once said:
          </p>
          <div style={{ paddingTop: "10px" }} />
          <div style={{ width: "700px", margin:'auto'}}>
            <Card fluid style={{ fontStyle: "italic" }}>
              <Card.Content>
                <p>
                  “I will, in fact, claim that the difference between a bad
                  programmer and a good one is whether he considers his code or
                  his data structures more important. Bad programmers worry
                  about the code. Good programmers worry about data structures
                  and their relationships.”
                </p>
              </Card.Content>
            </Card>
          </div>
          <div style={{ paddingTop: "20px" }} />
          <p>
            Perhaps he's being a bit harsh, but in the end the more we learn
            about data structures the more we see how right he is!
          </p>
          <Header as="h2">Implementation and Big O Notation</Header>
          <p>
            Arrays are some of the oldest data structures in computer science.
            They consist of a list of elements each indexed by at least one key.
            Here is an example of an array assigned to the variable "myArray":
          </p>
          <SyntaxComponent
            text={`
            let myArray = ['John Smith', 'Mary Sue', 'Henry Williams'] `}
          />
          <p>
            Each element in the array is indexed from 0 onward. In order to
            access "Henry Williams" in the array all we need to do is grab it by
            its index, as so: myArray[2]. In order to delete him from the array
            we could use JavaScript's array method .pop(), as so:
          </p>

          <SyntaxComponent
            text={`
            let myArray = ['John Smith', 'Mary Sue', 'Henry Williams'] 
            undefined
            myArray.pop()
            "Henry Williams"`}
          />
          <p>
            The above is a simple example taken from Google Chrome's DevTools
            console. And, since we simply popped Henry Williams from the end of
            the array, everything else in the array remains the same. However,
            what if we wanted to remove 'John Smith' from the array? We could do
            that using JavaScript's .shift() array method. However, as the name
            implies, every other element in the array will need to be shifted.
            Why? Because, by removing the element at index [0], in order to
            retain the integrity of the data structure, every other element
            needs to be shifted down one index. Data structures abhor a vaccuum!
          </p>
          <p>
            As we've seen in my blog post on Big O Notation, this means that the
            number of operations increases linearly with the number of elements.
            In other words, we're dealing with Big O Notation of O(n), where n
            is the number of elements.
          </p>
          <Image
            src="https://cdn-media-1.freecodecamp.org/images/1*KfZYFUT2OKfjekJlCeYvuQ.jpeg"
            centered
            size="large"
          />

          <p>
            As we see above, linear time complexity is still in the "fair"
            region of the chart. It's not the best but, according to Wikipedia
            it's still one of the best possible outcomes under these situations:
          </p>
          <div style={{ width: "700px", margin: "auto" }}>
            <Card fluid style={{ fontStyle: "italic" }}>
              <Card.Content>
                <p>
                  "Linear time is the best possible time complexity in
                  situations where the algorithm has to sequentially read its
                  entire input. Therefore, much research has been invested into
                  discovering algorithms exhibiting linear time or, at least,
                  nearly linear time. This research includes both software and
                  hardware methods."
                  <a href="https://en.wikipedia.org/wiki/Time_complexity#:~:text=An%20algorithm%20is%20said%20to%20take%20linear%20time%2C%20or%20O,the%20size%20of%20the%20input.">
                    -Wikipedia
                  </a>
                </p>
              </Card.Content>
            </Card>
          </div>

          <Header as="h2">Array Subtypes</Header>
          <p>
            There are two types of arrays - dynamic and static. Static arrays
            demand the programmer to identify ahead of time the number of
            elements that the array will contain. This is determined when the
            program is compiled, and cannot be changed.
          </p>
          <p>
            Obviously, if we want user functionality, static arrays will not
            suffice. However, static arrays are best for
          </p>
          <div style={{ paddingTop: "20px" }} />
        </Segment>
      </Container>
    </div>
  );
}

export default ArraysPost;
