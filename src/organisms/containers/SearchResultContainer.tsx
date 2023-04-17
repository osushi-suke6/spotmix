import { memo } from 'react';

import ISearchedTracks from '../../interfaces/ISearchedTracks';
import TrackContainer from '../containers/TrackContainer';

interface IProps {
  result: ISearchedTracks;
}

const SearchResultContainer = memo(function searchResultContainer(props: IProps) {
  return (
    <>
      {props.result.tracks.items.map((t, i) => {
        const data = {
          track: t.name,
          artist: t.artists.map((a) => a.name).join(', '),
          albumImgSrc: t.album.images[2].url,
          uri: `spotify:track:${t.id}`,
        };

        return <TrackContainer key={i} {...data} />;
      })}
    </>
  );
});

export default SearchResultContainer;
