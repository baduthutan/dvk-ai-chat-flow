import { useEffect, useState } from 'react';

export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial value
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
} 