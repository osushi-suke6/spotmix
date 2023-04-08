import { useState } from 'react';

import SearchInput from '../atoms/SearchInput';
import useEnterKey from '../hooks/useEnterKey';

interface IProps {
  onEnter: (text: string) => void;
}

// TODO
// appropriate error handling on API ERROR: for instance 401

export default function SearchBar(props: IProps) {
  const [query, setQuery] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e?.target.value);
  };

  const ref = useEnterKey(() => {
    if (query !== '') props.onEnter(query);
  });

  return (
    <>
      <SearchInput onChange={handleChange} ref={ref} />
    </>
  );
}
