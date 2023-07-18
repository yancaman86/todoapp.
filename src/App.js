import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [inputs, setInputs] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addInput = () => {
    if (input !== "") {
      const newInput = {
        id: nextId,
        text: input
      };
      setInputs([...inputs, newInput]);
      setInput("");
      setNextId(nextId + 1);
    }
  };

  const deleteInput = (id) => {
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs(newInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className=" ">
        <h1>Search Box</h1>
        <div>
          <input
            type="text"
            placeholder="Enter"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button className="add-button" onClick={addInput}>
            Submit
          </button>
        </div>
        <ul className="todo-list">
          {inputs.map((input) => (
            <div className="input" key={input.id}>
              <li>{input.text}</li>

              <button
                className="delete-button"
                onClick={() => {
                  deleteInput(input.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default App;
