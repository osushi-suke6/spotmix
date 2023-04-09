import { KeyboardEvent, memo, useCallback } from 'react';

import SearchInput from '../atoms/SearchBox';

interface IProps {
  onEnter?: (text: string) => void;
  ref: React.ForwardedRef<HTMLInputElement>;
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
      <SearchInput onChange={handleChange} onKeyDown={handleKeyDown} />
    </>
  );
});

export default SearchBar;
