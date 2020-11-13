import React from "react";
import SyntaxComponent from "../components/syntax";

function PythonIntro() {
  return (
    <div className="container">
      <h1>How Python Works</h1>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <h1>Python Data Types</h1>
      <h2>Fundamentals</h2>
      <h3>int and float</h3>
      <p></p>
      <SyntaxComponent text={`print(2 ** 87) # 2 to the power of 87`} />
      <p></p>
      <p></p>
      <p></p>
      <h2>Statements vs Expressions</h2>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <h2>Escape Sequence</h2>
      <SyntaxComponent text={`text=''`} />
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <h2>List</h2>
      <p>Lists are immutable</p>
      <p>Slicing does not mutate the array</p>
      <SyntaxComponent
        text={`
            list = ['man', 2.5, 'angry', 'true', [1, 2, 3]]
            new_list = list
            new_list[0] = 'woman'
            print(list)
            print(new_list)
            `}
      />
      <h2>Matrix</h2>
      <p></p>
      <SyntaxComponent
        text={`
        matrix = [
            [0,2,3],
            [0,6,7],
            [3,4,6]
          ]
            `}
      />
      <p></p>
      <h2>Sets</h2>
      <h3>difference</h3>
      <p></p>
      <SyntaxComponent text={``} />
      <h3>difference_update</h3>
      <p></p>
      <h3>issubset and issuperset</h3>
      <p></p>
      <h3>Docstrings and Help</h3>
      <p></p>
      <h3>*args and **kwargs</h3>
      <p>Seems similar to the spread operator in JavaScript</p>
      <h3>Object Oriented Programming</h3>
      <p>
        Class object attributes do not change accross specific instances of that
        object. Attributes, on the other hand, do change.
      </p>
      <h3>Encapsulation</h3>
      <p>
        Encapsulation is one of the fundamental concepts in object-oriented
        programming (OOP). It describes the idea of wrapping data and the
        methods that work on data within one unit. This puts restrictions on
        accessing variables and methods directly and can prevent the accidental
        modification of data. To prevent accidental change, an object’s variable
        can only be changed by an object’s method. Those types of variables are
        known as private variable.
        https://www.geeksforgeeks.org/encapsulation-in-python/
      </p>
      <h3>Abstraction</h3>
      <p>
        Abstraction is the manner in which methods and built-in functions are
        provided to the user.
      </p>
      <h4>Private versus Public variables</h4>
      <p>
        In Java variables can be explicitly declared private, whereas in Python
        an underscore is the conventional way of declaring that a variable is
        private.
      </p>
      <h3>Inheritance</h3>
      <p>
        Inheritance is the way in which classes pass their properties and
        attributes onto their children.
      </p>
      <h3>Polymorphism</h3>

      <h3>Pure Functions</h3>
      <p>Rules</p>
      <ul>
        <li>No Side Effects</li>
        <li>Same Input Should Result in Same OutPut</li>
      </ul>
      <SyntaxComponent text={``}/>
    </div>
  );
}

export default PythonIntro();
