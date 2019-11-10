import React from 'react';
import PropTypes from 'prop-types'
import { List, Search } from './';

const byQuery = (query) => (item) => (
  !query || item.name.toLowerCase().includes(query.toLowerCase())
);

const SearchableList = ({ className, list, archive, reset, archived }) => {
  const [query, setQuery] = React.useState('');

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredList = list.filter(byQuery(query));

  return (
    <div className={className}>
      <Search query={query} handleQuery={handleQuery} label="Search:" />
      <hr />
      <List list={filteredList} archive={archive} archived={archived} reset={reset} />
    </div>
  );
};

SearchableList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
      }
    )
  ).isRequired,
  className: PropTypes.string,
  archive: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  archived: PropTypes.arrayOf(
    PropTypes.number
  ).isRequired
}

export { SearchableList };
export default SearchableList;
