import { useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

import AuthManager from '../classes/AuthManager';

export default function SpotmixPlayer() {
  const [token, setToken] = useState('');

  const auth = new AuthManager();

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code') || '';

  const t = localStorage.getItem('access-token') || '';

  return (
    <>
      <p>spotmix</p>
      <button
        onClick={async () => {
          auth.auth();
        }}
      >
        auth
      </button>
      <button
        onClick={async () => {
          auth.requestAccessToken(code);
        }}
      >
        get token
      </button>
      <SpotifyPlayer
        token={t}
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
        callback={(state) => console.log(state)}
      />
    </>
  );
}
