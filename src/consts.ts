const ACCESS_KEY = 'access-token';
const CLIENT_ID = '45841e6544c0477a983f3f89cfd22e26';
const REDIRECT_URI_DEV = 'http://localhost:3000/callback';
const REDIRECT_URI_PROD = 'https://spotmix.netlify.app/callback';
const REDIRECT_URI = import.meta.env.DEV ? REDIRECT_URI_DEV : REDIRECT_URI_PROD;
const REFRESH_KEY = 'refresh-token';
const SCOPE =
  'streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state';

export { ACCESS_KEY, CLIENT_ID, REDIRECT_URI, REFRESH_KEY, SCOPE };
