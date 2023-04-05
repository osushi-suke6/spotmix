import SpotifyPlayer from 'react-spotify-web-playback';

export default function SpotmixPlayer() {
  const t = localStorage.getItem('access-token') || '';

  return (
    <>
      <p>spotmix</p>
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
    </>
  );
}
