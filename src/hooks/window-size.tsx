import { useLayoutEffect, useState } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.addEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
}
