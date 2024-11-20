import React, {useState} from 'react';

const Search = () => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        console.log(e.target.value);
        
        setSearch(e.target.value);
    }

    const handledelete = () => {
        setSearch('');
    }

    return (
        <div>
            <input value={search} onChange={handleSearch} type="text" placeholder="Chercher une recette, un ingrédient" />
            <button onClick={handledelete}>x</button>
        </div>
    );
}

export default Search;