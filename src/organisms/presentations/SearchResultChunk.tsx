import { memo } from 'react';

import Card from '../../atoms/Card';
import ISearchedTracks from '../../interfaces/ISearchedTracks';

interface IProps {
  result: ISearchedTracks;
}

const SearchResultChunk = memo(function searchResultchunk(props: IProps) {
  return (
    <>
      {props.result.tracks.items.map((t, i) => {
        const src = t.album.images[2].url;
        const title = t.name;
        const description = t.name;
        return <Card key={i} imageSrc={src} title={title} description={description} />;
      })}
    </>
  );
});

export default SearchResultChunk;
