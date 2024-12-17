import React from 'react';
import { useState } from 'react';

const SearchBar = () => {

    const {query, setQuery} = useState('');

    const handleChange = (event) => {   
        setQuery(event.target.value);
    }

    return (
        <div className='container-searchBar'>
           <input type="text" maxLength={30} id='seachInput' placeholder='france' value={query} onChange={handleChange} /> 
        </div>
    );
};

export default SearchBar;