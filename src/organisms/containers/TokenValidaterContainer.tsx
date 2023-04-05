import { useEffect, useState } from 'react';

export default function TokenValidaterContainer() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const _token = localStorage.getItem('access-token');
    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <>
      <p>token is: {token ? token.slice(0, 20) : 'Invalid'}</p>
    </>
  );
}

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
