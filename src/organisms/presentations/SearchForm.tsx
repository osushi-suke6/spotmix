import { memo, useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import SearchBar from '../../molecules/SearchBar';

const SearchForm = memo(function searchForm() {
  console.log('SearchForm Rendered');

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Form>
      <SearchArea className="search-bar">
        <FixedBox>
          <SearchBar ref={inputRef} />
        </FixedBox>
      </SearchArea>
      <ResultArea className="search-result"></ResultArea>
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
