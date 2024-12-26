// CountdownTimer.js
import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [secondTime, setSecondTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function handleStart(e) {
    e.preventDefault();
    setTimeLeft(secondTime);
    setIsActive(true);
  }

  useEffect(() => {
    let intervalId;

    if (isActive && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(intervalId);
      alert('Vaqt tugadi!');
      setIsActive(false);
    }

    return () => clearInterval(intervalId); // intervalni tozalash
  }, [isActive, timeLeft]);

  return (
    <div>
      <h1>Masala 1 - Countdown Timer</h1>
      <input
        value={secondTime}
        onChange={(e) => setSecondTime(e.target.value)}
        type="number"
        placeholder="Sekundlarda vaqt kiriting"
      />
      <button onClick={handleStart}>Boshlash</button>

      <div>
        <h2>Qolgan vaqt: {timeLeft} sekund</h2>
      </div>
    </div>
  );
}

export default CountdownTimer;
