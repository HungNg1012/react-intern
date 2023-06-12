import './App.css';
import React from 'react';
import { useState, createContext } from 'react';
import Timer from "./Components/Timer"

export const DeadlineContext = createContext();

function App() {
  const [deadline, setDeadline] = useState(new Date("June 12, 2023 14:26:00"));

  return (
    <DeadlineContext.Provider value={[deadline, setDeadline]}>
      <div className="App">
        <Timer/>
      </div>
    </DeadlineContext.Provider>
  );
}

export default App;
