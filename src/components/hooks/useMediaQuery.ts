'use client';
import { useEffect, useState } from 'react';

function useMediaQuery(maxPixels: number) {
  const [mediaMatches, setMediaMatches] = useState(
    window ? window.innerWidth <= maxPixels : true
  );
  let myMediaQuery: MediaQueryList;
  useEffect(() => {
    myMediaQuery = window.matchMedia(`(max-width:${maxPixels}px)`);
    myMediaQuery.addEventListener('change', ({ matches }) => {
      if (matches) {
        setMediaMatches(true);
      } else {
        setMediaMatches(false);
      }
    });
  }, []);
  return mediaMatches;
}

export default useMediaQuery;
