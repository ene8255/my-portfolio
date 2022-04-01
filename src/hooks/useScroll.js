import { useState, useEffect } from 'react';

// scrollY 값을 가져오는 함수
export function useScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let mounted = true;

    window.addEventListener('scroll', () => {
      if(mounted) {
        setScrollY(window.pageYOffset);
      }
    });

    return () => {
      mounted = false;
    }
  }, []);

  return scrollY;
}