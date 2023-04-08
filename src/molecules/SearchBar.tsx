import { memo, useCallback } from 'react';

import SearchInput from '../atoms/SearchInput';
import useEnterKey from '../hooks/useEnterKey';

interface IProps {
  onEnter: (text: string) => void;
}

// TODO
// appropriate error handling on API ERROR: for instance 401

const SearchBar = memo(function SearchBar(props: IProps) {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    console.log(e?.target.value);
  }, []);

  const ref = useEnterKey(() => {
    const query = ref.current?.value ?? '';
    if (query !== '') props.onEnter(query);
  });

  return (
    <>
      <SearchInput onChange={handleChange} ref={ref} />
    </>
  );
});

export default SearchBar;
