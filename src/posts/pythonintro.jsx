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
    </div>
  );
}

export default PythonIntro();
