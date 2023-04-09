import { memo, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import SearchBar from '../../molecules/SearchBar';
import SearchResultsContainer from '../containers/SearchResultsContainer';

const SearchForm = memo(function searchForm() {
  console.log('SearchForm');

  const [query, setQuery] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEnter = useCallback((t: string) => {
    setQuery(t);
  }, []);

  return (
    <Form>
      <SearchArea className="search-bar">
        <FixedBox>
          <SearchBar ref={inputRef} onEnter={handleEnter} />
        </FixedBox>
      </SearchArea>
      <ResultArea className="search-result">
        <SearchResultsContainer query={query} />
      </ResultArea>
    </Form>
  );
});

export default SearchForm;

const searchHeight = '50px';

const Form = styled.div`
  height: 100%;
  position: relative;
`;

const FixedBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${searchHeight};
  position: absolute;
`;

const SearchArea = styled.div`
  width: 100%;
  height: ${searchHeight};
`;

const ResultArea = styled.div`
  width: 100%;
  height: calc(100% - ${searchHeight});
  overflow-y: scroll;
`;
