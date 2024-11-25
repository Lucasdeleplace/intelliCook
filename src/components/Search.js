import React, {useState} from 'react';
import "../styles/Search.css";
import loupe from '../assets/694985.png';

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
            <img src = {loupe} onClick={handledelete} className='searchDelete'/>
            
        </div>
    );
}

export default Search;