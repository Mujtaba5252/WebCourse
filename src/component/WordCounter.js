import React, { useState } from "react";

function WordCounter() {
  const [text, setText] = useState("Mujtaba ali");

  const dabao = () => {
    setText("");
  };

  return (
    <>
      {/* <p >{text}</p>
    <button onClick={dabao}>Click</button> */}

      {/* <div className="container">
       
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={dabao}
            id="textBox"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div className="container my-2"></div> */}

<h1>Summary</h1>
<p>{text.split(" ").length} words and length {text.length}</p>
<button onClick={dabao}>CLear</button>


    </>
  );
}

export default WordCounter;
