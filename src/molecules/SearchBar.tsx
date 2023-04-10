import { KeyboardEvent, memo, useCallback } from 'react';

import SearchBox from '../atoms/SearchBox';

interface IProps {
  onEnter?: (text: string) => void;
}

// TODO
// appropriate error handling on API ERROR: for instance 401

const SearchBar = memo(function SearchBar(props: IProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    //console.log(e?.target.value);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (!props.onEnter) return;
    if (e.key !== 'Enter') return;
    if (!e.currentTarget.value) return;

    props.onEnter(e.currentTarget?.value);
  }, []);

  return (
    <>
      <SearchBox onChange={handleChange} onKeyDown={handleKeyDown} />
    </>
  );
});

export default SearchBar;
