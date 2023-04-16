import { memo, useEffect, useState } from 'react';
import {
  usePlaybackState,
  usePlayerDevice,
  useSpotifyPlayer,
} from 'react-spotify-web-playback-sdk';

import useSpotifyPlay from '../../hooks/useSpotifyPlay';
import useSpotifyQueue from '../../hooks/useSpotifyQueue';
import Player from '../presentations/Player';

interface IProps {
  token: string;
}
const playerContainer = (props: IProps) => {
  console.log('playerContainer');

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

      console.log(state);
    };

    console.log('add, listenr');

    player?.addListener('player_state_changed', onStateChange);

    return () => {
      console.log('remove listener');
      player?.removeListener('player_state_changed', onStateChange);
    };
  }, [player]);

  const { transfer } = useSpotifyPlay();
  const device = usePlayerDevice();
  const state = usePlaybackState();

  if (!player) return <p>player is not ready</p>;
  if (!device) return <p>device is not ready</p>;

  const togglePlay = async () => {
    if (!state) {
      await transfer(props.token, device.device_id);
    }

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
