import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = {
      month: 'short',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-IN', options);
  };

  const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    return date.toLocaleTimeString('en-IN', options);
  };

  return (
    <h2 className='text-white text-xs'>{formatDate(currentDateTime)} &nbsp;{formatTime(currentDateTime)}</h2>
  );
};

export default DateTimeDisplay;