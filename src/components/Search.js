import React from 'react';
import "../styles/Search.css";

const Search = ({ handleSearch, search, handledelete }) => {
  return (
    <div className="searchContainer">
      <input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Chercher une recette, un ingrédient"
        className="searchInput"
      />
      <p onClick={handledelete} className="searchDelete">🔍</p>
    </div>
  );
}

export default Search;