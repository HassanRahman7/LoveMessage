import React from 'react';

export const Button = ({ onClick, label, color = 'pink' }) => {
  const colorClasses = {
    pink: 'bg-pink-500 hover:bg-pink-600 text-white',
    blue: 'bg-blue-400 hover:bg-blue-500 text-white',
    gray: 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
  };

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full shadow-md transition text-sm sm:text-base font-medium ${colorClasses[color]}`}
    >
      {label}
    </button>
  );
};
