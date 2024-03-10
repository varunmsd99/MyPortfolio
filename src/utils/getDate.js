import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const formatDateTime = (date) => {
    const options = {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    return date.toLocaleDateString('en-US', options);
  };
  return (
    <h2 className='text-white text-xs'>{formatDateTime(currentDateTime)}</h2>
  );
};

export default DateTimeDisplay;