import React from 'react';
import './CountryCard.css';

const CountryCard  = ({country}) => {
    return (
        <div className='country-card'>
            <img src={country.flags.png} alt={country.name.common}/>
            <h2>{country.name.common}</h2>
            <h3>{country.capital}</h3>
            <p>{country.region}</p>
        </div>
    );
};

export default CountryCard ;