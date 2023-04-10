import { usePlaybackState, useWebPlaybackSDKReady } from 'react-spotify-web-playback-sdk';

const PlayingTrack = () => {
  console.log('PlayingTrack');
  const playbackState = usePlaybackState(true, 500);

  const isReady = useWebPlaybackSDKReady();
  console.log(isReady);

  if (playbackState === null) return null;
  console.log('PlayingTrack ready');
  return <p>Current song: {playbackState.track_window.current_track.name}</p>;
};

export default PlayingTrack;
