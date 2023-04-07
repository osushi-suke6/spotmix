import SpotifyPlayer from 'react-spotify-web-playback';
import styled from 'styled-components';

export default function SpotmixPlayer() {
  const t = localStorage.getItem('access-token') || '';

  return (
    <SContainer>
      <SpotifyPlayer
        name="spotmix player"
        token={t}
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
        callback={(state) => console.log(state)}
        getOAuthToken={async (cb) => {
          cb(t);
          console.log('cb called');
        }}
      />
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  margin-top: auto;
`;
