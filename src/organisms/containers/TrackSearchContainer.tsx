import { useState } from 'react';
import styled from 'styled-components';

import SearchInput from '../../atoms/SearchInput';

export default function TrackSearchContainer() {
  const [result, setResult] = useState<any>({});

  const search = async () => {
    const token = localStorage.getItem('access-token') ?? '';
    const res = await fetch('https://api.spotify.com/v1/me', {
      //mode: 'no-cors',
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });

    return await res.json();
  };

  return (
    <SContainer>
      <SearchInput />
      <button
        onClick={async () => {
          const res = await search();
          setResult(res);
          console.log(res);
        }}
      >
        search
      </button>
      <p>{result.display_name}</p>
    </SContainer>
  );
}

const SContainer = styled.div`
  width: 100%;
`;
