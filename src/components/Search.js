import React from 'react';
import "../styles/Search.css";
import loupe from '../assets/croix.png';

const Search = ({handleSearch, search, handledelete}) => {
    return (
        <div className='allSearch'>
            <input value={search} onChange={handleSearch} type="text" placeholder="Chercher une recette, un ingrédient" className="searchInput"></input>
            <img src = {loupe} onClick={handledelete} className='searchDelete'/>
            
        </div>
    );
}

export default Search;