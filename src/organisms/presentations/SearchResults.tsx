import ISearchedTracks from '../../interfaces/ISearchedTracks';
import SearchResultContainer from '../containers/SearchResultContainer';

interface IProps {
  results: ISearchedTracks[];
}

const SearchResults = (props: IProps) => {
  return (
    <>
      {props.results.map((result, i) => {
        return <SearchResultContainer key={i} result={result} />;
      })}
    </>
  );
};

export default SearchResults;
