// EightBall.js
import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {
  const initialColor = 'black';
  const initialMessage = 'Think of a Question';

  const [color, setColor] = useState(initialColor);
  const [message, setMessage] = useState(initialMessage);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setMessage(msg);
    setColor(color);
  };

  const handleReset = () => {
    setMessage(initialMessage);
    setColor(initialColor);
  };

  return (
    <div className="eight-ball-container">
      <div
        className="eight-ball"
        style={{ backgroundColor: color }}
        onClick={handleClick}
      >
        <p className="message">{message}</p>
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default EightBall;
