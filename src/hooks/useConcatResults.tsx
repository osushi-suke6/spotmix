import { useCallback, useState } from 'react';

import ISearchedTracks from '../interfaces/ISearchedTracks';

export default function useConcatResults() {
  const [results, setResults] = useState<ISearchedTracks[]>([]);

  const concatResult = useCallback((result: ISearchedTracks) => {
    const concat = [...results, result];
    setResults(concat);
  }, []);

  const init = () => {
    setResults([]);
  };

  return { results, concatResult, init };
}
