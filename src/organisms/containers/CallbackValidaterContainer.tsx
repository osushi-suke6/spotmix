import { useEffect } from 'react';

const CLIENT_ID = '45841e6544c0477a983f3f89cfd22e26';
const REDIRECT_URI = 'http://localhost:3000/callback';

export default function CallbackValidaterContainer() {
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

  console.log(response);

  if (!response.ok) throw new Error('HTTP status ' + response.status);

  const json = await response.json();
  localStorage.setItem('access-token', json.access_token);

  console.log('access Token set');
};
