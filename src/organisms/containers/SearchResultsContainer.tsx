import { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import useScrollBottom from '../../hooks/useScrollBottom';
import useSpotifySearch from '../../hooks/useSpotifySearch';
import ISearchedTracks from '../../interfaces/ISearchedTracks';
import SearchResults from '../presentations/SearchResults';

interface IProps {
  query: string;
}

const searchResultsContainer = (props: IProps) => {
  const [results, setResults] = useState<ISearchedTracks[]>([]);
  const [result, search] = useSpotifySearch();

  const initPages = useCallback(() => {
    if (props.query === '') return;

    setResults([]);
    const token = localStorage.getItem('access-token') ?? '';
    search({ q: props.query }, token);
  }, [props.query]);

  const updateResults = () => {
    if (!result) return;

    if (result) setResults([...results, result]);
  };

  const fetchNext = () => {
    const params = {
      q: props.query,
      offset: (results.length * 20).toString(),
    };

    const token = localStorage.getItem('access-token') ?? '';
    search(params, token);
  };

  useEffect(initPages, [initPages]);
  useEffect(updateResults, [result]);

  const ref = useScrollBottom(fetchNext);

  return (
    <ResultsContainer ref={ref} className="search-results">
      <SearchResults results={results} />
    </ResultsContainer>
  );
};

const SearchResultsContainer = memo(searchResultsContainer);

export default SearchResultsContainer;

const ResultsContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
`;
