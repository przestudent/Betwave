import React from 'react';
import { useState } from 'react';

function useSportsAndEventFilter(): {
  filter: filters;
  setFilter: React.Dispatch<React.SetStateAction<filters>>;
  sport: sports;
  setSport: React.Dispatch<React.SetStateAction<sports>>;
} {
  const [filter, setFilter] = useState<filters>('all');
  const [sport, setSport] = useState<sports>('all');
  return {
    filter: filter,
    setFilter: setFilter,
    sport: sport,
    setSport: setSport,
  };
}

export default useSportsAndEventFilter;
