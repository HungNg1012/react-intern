import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December, 31, 2023";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    //console.log(time)
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    //console.log(days)
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="timer">
        <p className="timer-header">TIMER</p>
        <div className="timer-content">
          <div className="cell">
            <p>{days}</p>
            <span className="text">days</span>
          </div>
          <div className="cell">
            <p>{hours}</p>
            <span className="text">hours</span>
          </div>
          <div className="cell">
            <p>{minutes}</p>
            <span className="text">minutes</span>
          </div>
          <div className="cell">
            <p>{seconds}</p>
            <span className="text">seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
