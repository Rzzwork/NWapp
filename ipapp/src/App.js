
import './App.css';
import React, { useState } from 'react';

function App() {

  const [value, setValue] = useState('');
  const [newValue, setNewValue] = useState([]);

  function handleChange(e) {
    setValue(e.target.value)
  }

  function submitResult(e) {

    setNewValue((preValue) => {
      return (
        [...preValue, value]
      )
    })
    e.preventDefault()
  }

  return (
    <div className="App">
      <div>
        <form>
          <input onChange={handleChange}></input>
          <button onClick={submitResult}>submit</button>
        </form>
      </div>
      <div>
        <ul>
          {newValue.map((item) => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      </div>

    </div>
  );
}

export default App;
