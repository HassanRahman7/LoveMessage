import React, { useState } from 'react';
import '../App.css';

const MessageCard = ({ letter, message, show, darkMode, onClick }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    if (onClick) onClick();
    setFlipped(!flipped);
  };

  return (
    <div className="perspective" onClick={handleFlip}>
      <div className={`card ${flipped || show ? 'flipped' : ''}`}>
        <div className={`card-front flex items-center justify-center text-5xl font-semibold font-[Dancing Script, cursive] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-pink-500'}`}>
          {letter}
        </div>
        <div className="card-back p-6 text-base leading-relaxed">
          {message}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
