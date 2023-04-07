import styled from 'styled-components';

import SearchInput from '../../atoms/SearchInput';
import useSpotifySearch from '../../hooks/useSpotifySearch';

export default function TrackSearchContainer() {
  const { result, search } = useSpotifySearch();

  const token = localStorage.getItem('access-token') ?? '';
  const query = { q: 'beatles' };

  return (
    <SContainer>
      <SearchInput />
      <button
        onClick={() => {
          search(query, token);
        }}
      ></button>
      {result?.tracks.items.map((i, num) => {
        return <li key={num}>{i.name}</li>;
      })}
    </SContainer>
  );
}

const SContainer = styled.div`
  width: 100%;
`;
