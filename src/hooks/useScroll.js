import { useState, useEffect } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let mounted = true;
    window.addEventListener('scroll', (e) => {
      if (mounted) {
        setScrollY(window.pageYOffset);
      }
    });
    return () => {
      mounted = false;
    }
  }, []);

  return scrollY;
}