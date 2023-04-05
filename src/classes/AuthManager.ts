export default class AuthManager {
  private static readonly clientId = '45841e6544c0477a983f3f89cfd22e26';
  private static readonly redirectUri = 'http://localhost:3000/player';
  private static readonly scope =
    'streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state';

  async auth(): Promise<void> {
    const codeVerifier = this.generateRandomString(128);

    const codeChallenge = await this.generateCodeChallenge(codeVerifier);
    const state = this.generateRandomString(16);

    localStorage.setItem('code-verifier', codeVerifier);

    const args = new URLSearchParams({
      response_type: 'code',
      client_id: AuthManager.clientId,
      scope: AuthManager.scope,
      redirect_uri: AuthManager.redirectUri,
      state,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    });

    window.location.assign('https://accounts.spotify.com/authorize?' + args.toString());
  }

  async requestAccessToken(code: string) {
    const codeVerifier = localStorage.getItem('code-verifier');

    if (!codeVerifier) throw Error('code-verifier is not found');

    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: AuthManager.redirectUri,
      client_id: AuthManager.clientId,
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

    console.log(json);

    localStorage.setItem('access-token', json.access_token);
    console.log(json.access_token);

    console.log('access TOken set');
  }

  private generateRandomString(length: number) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  private async generateCodeChallenge(codeVerifier: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);

    return this.base64encode(digest);
  }

  private base64encode(buffer: ArrayBuffer) {
    const bytes = new Uint8Array(buffer);
    let encoded = window.btoa(String.fromCharCode(...bytes));
    encoded = encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    return encoded;
  }
}
