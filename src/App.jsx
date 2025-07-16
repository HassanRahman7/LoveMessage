import React, { useState } from 'react';
import MessageCard from './components/MessageCard';
import { reasons } from './data/reasons';
import { Button } from './components/Button';
import './App.css';

const App = () => {
  const [showAll, setShowAll] = useState(false);
  const [shuffleIndexes, setShuffleIndexes] = useState([]);
  const [surprise, setSurprise] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [popup, setPopup] = useState(null);

  const handleSurprise = () => {
    const index = Math.floor(Math.random() * reasons.length);
    setSurprise(index);
    setPopup({ index, ...reasons[index] });
    setShowAll(false);
    setShuffleIndexes([]);
  };

  const handleShuffle = () => {
    const shuffled = [...Array(26).keys()].sort(() => 0.5 - Math.random());
    setShuffleIndexes(shuffled.slice(0, 3));
    setPopup(null);
    setShowAll(false);
    setSurprise(null);
  };

  const handleShowAllToggle = () => {
    setShowAll((prev) => !prev);
    setPopup(null);
    setSurprise(null);
    setShuffleIndexes([]);
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleCardClick = (index) => {
    setPopup({ index, ...reasons[index] });
  };

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-pink-100 text-pink-700 min-h-screen'}>
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold font-[cursive] mb-2">A to Z – Reasons I Love You ❤️</h1>
        <p className="mb-6">Every letter tells a story of my love for you 💖</p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button onClick={handleSurprise} label="Surprise Me! 💖" color="pink" />
          <Button onClick={handleShuffle} label="Shuffle Cards 🔄" color="blue" />
          <Button onClick={handleShowAllToggle} label={showAll ? "Hide All 🙈" : "Show All 👀"} color="gray" />
          <Button onClick={toggleDarkMode} label={darkMode ? '☀️' : '🌙'} color="yellow" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6">
          {reasons.map((item, index) => (
            <MessageCard
              key={index}
              letter={item.letter}
              message={item.message}
              show={
                showAll ||
                shuffleIndexes.includes(index) ||
                index === surprise
              }
              darkMode={darkMode}
              onClick={() => {
                if (!showAll && !shuffleIndexes.includes(index)) handleCardClick(index);
              }}
            />
          ))}
        </div>

        <div className="mt-12 text-center text-sm italic">
          <p>"In all the world, there is no heart for me like yours."</p>
          <p className="mt-1">Made with endless love ❤️ | Click any letter to discover why you're amazing</p>
        </div>
      </div>

      {popup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 text-center relative">
            <button onClick={() => setPopup(null)} className="absolute top-3 right-3 text-pink-500 text-xl">✖</button>
            <div className="text-5xl text-pink-500 font-[Dancing Script, cursive] mb-2">{popup.letter}</div>
            <h2 className="text-2xl font-semibold mb-2">{popup.message.split(' – ')[0]}</h2>
            <p className="text-gray-700 dark:text-gray-200">{popup.message.split(' – ')[1]}</p>
            <button
              onClick={() => setPopup(null)}
              className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm"
            >
              Close 💖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;