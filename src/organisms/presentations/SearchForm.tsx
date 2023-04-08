import styled from 'styled-components';

import Card from '../../atoms/Card';
import useSpotifySearch from '../../hooks/useSpotifySearch';
import SearchBar from '../../molecules/SearchBar';

export default function SearchForm() {
  console.log('SearchForm Rendered');

  const { result, search } = useSpotifySearch();
  const token = localStorage.getItem('access-token') ?? '';

  const src = 'https://i.scdn.co/image/ab67616d00004851ed801e58a9ababdea6ac7ce4';

  console.log(result);
  return (
    <SForm>
      <SSearchContainer>
        <SSearch>
          <SearchBar onEnter={(t) => search({ q: t }, token)} />
        </SSearch>
      </SSearchContainer>
      <SResults className="search-result">
        {result?.tracks.items.map((t, i) => {
          const src = t.album.images[2].url;
          const title = t.name;
          const description = t.name;
          return <Card key={i} imageSrc={src} title={title} description={description} />;
        })}
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
  background: gray;
  overflow-y: scroll;
`;
