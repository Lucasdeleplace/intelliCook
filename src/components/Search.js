import React, {useState} from 'react';
import "../styles/Search.css";

const Search = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handledelete = () => {
        setSearch('');
    }

    return (
        <div className='allSearch'>
            <input value={search} onChange={handleSearch} type="text" placeholder="Chercher une recette, un ingrédient" className="searchInput"></input>
            <p onClick={handledelete} className='searchDelete'>🔍</p>
        </div>
    );
}

export default Search;