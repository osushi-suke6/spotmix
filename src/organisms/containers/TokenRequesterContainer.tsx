import { useEffect } from 'react';

import { CLIENT_ID, REDIRECT_URI } from '../../consts';

export default function TokenRequesterContainer() {
  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      (async () => {
        console.log('called useEffect');
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (!code) {
          throw Error('code is null');
        }

        requestAccessToken(code);
      })();
    }

    return () => {
      ignore = true;
    };
  }, []);
  return <></>;
}

const requestAccessToken = async (code: string) => {
  const codeVerifier = localStorage.getItem('code-verifier');

  if (!codeVerifier) throw Error('code-verifier is not found');

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    code_verifier: codeVerifier,
  });

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    window.location.href = '/login';
    throw new Error('HTTP status ' + response.status);
  }

  const json = await response.json();
  console.log(json);
  localStorage.setItem('access-token', json.access_token);
  localStorage.setItem('refresh-token', json.refresh_token);

  console.log('access Token set');
  window.location.href = '/player';
};
