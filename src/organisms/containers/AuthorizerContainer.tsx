import { useEffect, useState } from 'react';

const CLIENT_ID = '45841e6544c0477a983f3f89cfd22e26';
const REDIRECT_URI = 'http://localhost:3000/callback';
const SCOPE =
  'streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state';

export default function AuthorizerContainer() {
  const [isReady, setIsReady] = useState(false);
  const [codeChallenge, setCodeChallenge] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    (async () => {
      const codeVerifier = generateRandomString(128);
      const codeChallenge = await generateCodeChallenge(codeVerifier);
      const state = generateRandomString(16);

      localStorage.setItem('code-verifier', codeVerifier);

      setCodeChallenge(codeChallenge);
      setState(state);
      setIsReady(true);
    })();
  }, []);

  return (
    <>
      <p>requester</p>
      {isReady ? (
        <button
          onClick={async () => {
            authorize(state, codeChallenge);
          }}
        >
          Login
        </button>
      ) : (
        <></>
      )}
    </>
  );
}

const authorize = (state: string, codeChallenge: string) => {
  const args = new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: SCOPE,
    redirect_uri: REDIRECT_URI,
    state,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
  });

  window.location.assign('https://accounts.spotify.com/authorize?' + args.toString());
};

const generateRandomString = (length: number) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const generateCodeChallenge = async (codeVerifier: string) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);

  return base64encode(digest);
};

const base64encode = (buffer: ArrayBuffer) => {
  const bytes = new Uint8Array(buffer);
  let encoded = window.btoa(String.fromCharCode(...bytes));
  encoded = encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return encoded;
};
