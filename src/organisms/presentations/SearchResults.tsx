import ISearchedTracks from '../../interfaces/ISearchedTracks';
import SearchResultChunk from './SearchResultChunk';

interface IProps {
  resultChunks: ISearchedTracks[];
}

const SearchResults = (props: IProps) => {
  return (
    <>
      {props.resultChunks.map((chunk, i) => {
        return <SearchResultChunk key={i} result={chunk} />;
      })}
    </>
  );
};

export default SearchResults;
