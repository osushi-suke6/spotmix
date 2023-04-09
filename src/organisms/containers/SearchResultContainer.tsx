import { memo } from 'react';

import ISearchedTracks from '../../interfaces/ISearchedTracks';
import Track from '../presentations/Track';

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
        };

        return <Track key={i} {...data} />;
      })}
    </>
  );
});

export default SearchResultContainer;
