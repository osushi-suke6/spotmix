import ISearchedTracks from '../../interfaces/ISearchedTracks';
import SearchResult from './SearchResult';

interface IProps {
  results: ISearchedTracks[];
}

const SearchResults = (props: IProps) => {
  return (
    <>
      {props.results.map((result, i) => {
        return <SearchResult key={i} result={result} />;
      })}
    </>
  );
};

export default SearchResults;
