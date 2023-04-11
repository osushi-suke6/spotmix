import { memo, useEffect, useState } from 'react';
import { useSpotifyPlayer } from 'react-spotify-web-playback-sdk';

import Player from '../presentations/Player';

const playerContainer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [playing, setPlaying] = useState<Spotify.Track | null>(null);

  const player = useSpotifyPlayer();

  useEffect(() => {
    const onStateChange = async () => {
      console.log('changed');
      const state = await player?.getCurrentState();

      const _isPaused = state?.paused ?? isPaused;
      setIsPaused(_isPaused);

      const _playing = state?.track_window.current_track ?? null;
      setPlaying(_playing);
    };

    player?.addListener('player_state_changed', onStateChange);

    return () => {
      player?.removeListener('player_state_changed', onStateChange);
    };
  }, [player]);

  if (!player) return null;

  return (
    <Player
      togglePlay={async () => {
        player?.togglePlay();
      }}
      isPaused={isPaused}
      playingTrack={playing?.name ?? ''}
      artist={playing?.artists.map((a) => a.name).join(', ') ?? ''}
      imgSrc={playing?.album.images[0].url ?? null}
    ></Player>
  );
};

const PlayerContainer = memo(playerContainer);

export default PlayerContainer;
