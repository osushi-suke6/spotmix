import { useCallback, useEffect } from 'react';
import styled from 'styled-components';

import useConcatResults from '../../hooks/useConcatResults';
import useSpotifySearch from '../../hooks/useSpotifySearch';
import SearchBar from '../../molecules/SearchBar';
import SearchResults from './SearchResults';

export default function SearchForm() {
  console.log('SearchForm Rendered');

  const { result, fetchNew, fetchNext } = useSpotifySearch();
  const { results, concatResult, init } = useConcatResults();

  const handleSearch = useCallback((t: string) => {
    const token = localStorage.getItem('access-token') ?? '';
    init();
    fetchNew(t, token);
  }, []);

  const handleLoad = useCallback(() => {
    const token = localStorage.getItem('access-token') ?? '';
    fetchNext(token);
  }, []);

  useEffect(() => {
    if (result) concatResult(result);
  }, [result]);

  useEffect(() => {
    console.log(results);
  }, [results]);
  return (
    <SForm>
      <SSearchContainer>
        <SSearch>
          <SearchBar onEnter={handleSearch} />
        </SSearch>
      </SSearchContainer>
      <SResults className="search-result">
        {!result ? null : <SearchResults resultChunks={results} />}
      </SResults>
    </SForm>
  );
}

const searchHeight = '50px';

const SForm = styled.div`
  height: 100%;
  position: relative;
`;

const SSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${searchHeight};
  position: absolute;
`;

const SSearchContainer = styled.div`
  width: 100%;
  height: ${searchHeight};
`;

const SResults = styled.div`
  width: 100%;
  height: calc(100% - ${searchHeight});
  overflow-y: scroll;
`;
