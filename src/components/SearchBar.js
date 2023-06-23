import React from 'react';

function SearchBar({ searchTerm, handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search by first name"
      value={searchTerm}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
