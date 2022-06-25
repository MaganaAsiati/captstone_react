import React from 'react';
import { PropTypes } from 'prop-types';
import './search.css';

function SearchBar({ handleOnChange, value }) {
  return (
    <div className="searbar">
      <form>
        <input
          className="input-search"
          value={value}
          type="search"
          onChange={handleOnChange}
          placeholder="search............"
        />
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
