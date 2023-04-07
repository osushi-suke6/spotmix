import styled from 'styled-components';

import useSpotifySearch from '../../hooks/useSpotifySearch';
import Card from '../../molecules/Card';

export default function SearchForm() {
  const { result, search } = useSpotifySearch();
  const token = localStorage.getItem('access-token') ?? '';
  const query = { q: 'beatles' };

  const src = 'https://i.scdn.co/image/ab67616d00004851ed801e58a9ababdea6ac7ce4';

  console.log(result);
  return (
    <>
      <button
        onClick={() => {
          search(query, token);
        }}
      >
        search
      </button>
      <SContainer>
        <Card imageSrc={src} title="strawberry" description="beatles" />
        <Card imageSrc={src} title="stgeijgieberry" description="beatles" />
        <Card imageSrc={src} title="stgeijgieberry" description="beatles" />
        <Card imageSrc={src} title="stgeijgieberry" description="beatles" />
        <Card imageSrc={src} title="stgeijgieberry" description="beatles" />
        <Card imageSrc={src} title="stgeijgieberry" description="beatles" />
        <Card imageSrc={src} title="stgeijgieberry" description="beatles" />
        <Card imageSrc={src} title="stgeijgieberry" description="beatles" />
        <Card imageSrc={src} title="stgeijgieberry" description="beatles" />
        <Card imageSrc={src} title="stgeijgieberry" description="beatles" />
      </SContainer>
    </>
  );
}

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  background: gray;
`;
