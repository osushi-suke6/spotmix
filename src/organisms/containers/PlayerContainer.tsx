import { memo, useEffect, useState } from 'react';
import {
  usePlaybackState,
  usePlayerDevice,
  useSpotifyPlayer,
} from 'react-spotify-web-playback-sdk';

import Player from '../presentations/Player';
import { useSpotifyContext } from '../providers/SpotifyProvider';

const playerContainer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [playing, setPlaying] = useState<Spotify.Track | null>(null);

  const player = useSpotifyPlayer();

  useEffect(() => {
    const onStateChange = async () => {
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

  const device = usePlayerDevice();
  const state = usePlaybackState();
  const context = useSpotifyContext();

  if (!player) return <p>player is not ready</p>;
  if (!device) return <p>device is not ready</p>;
  if (!context) return <p>context is not ready</p>;

  const togglePlay = async () => {
    await player.activateElement();

    if (!state) await context.api.player.transfer(device.device_id);
    await player.togglePlay();
  };

  return (
    <Player
      togglePlay={togglePlay}
      isPaused={isPaused}
      playingTrack={playing?.name ?? ''}
      artist={playing?.artists.map((a) => a.name).join(', ') ?? ''}
      imgSrc={playing?.album.images[0].url ?? null}
    ></Player>
  );
};

const PlayerContainer = memo(playerContainer);

export default PlayerContainer;
