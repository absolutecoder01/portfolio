import { useState, useEffect } from 'react';

export function useTime() {
  const [time, setTime] = useState('00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('pl-PL', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return time;
}