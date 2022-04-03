import React, { useState } from "react";

const Task1 = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = [];
    for (let i = 0; i < input.length; i++) {
      let temp = "";
      let position = i + 1;
      temp = input.charAt(i);
      arr[i] = temp.concat("-", position);
    }
    setOutput(arr.join(", ").toString());
  };
  return (
    <div>
      <h1>TASK 1</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a word"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
      <h2>Output</h2>
      {output}
    </div>
  );
};

export default Task1;
