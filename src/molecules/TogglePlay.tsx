import { useSpotifyPlayer } from 'react-spotify-web-playback-sdk';

const TogglePlay = () => {
  const player = useSpotifyPlayer();

  if (player === null) return null;

  const handleClick = () => {
    console.log('play clicked');
    player.getCurrentState().then((s) => {
      s?.context;
    });
    player.togglePlay();
  };

  return <button onClick={handleClick}>toggle play</button>;
};

export default TogglePlay;
