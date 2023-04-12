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

  const add = useSpotifyQueue();
  const { transfer } = useSpotifyPlay();
  const device = usePlayerDevice();
  const state = usePlaybackState();

  if (!player) return null;
  if (!device) return null;

  const togglePlay = async () => {
    if (!state) {
      await transfer(props.token, device?.device_id ?? '');
    }

    await player.togglePlay();
    //add('spotify:track:0KwugbvQTTVsfCceBzCOwY', props.token);
    //player.togglePlay();
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
