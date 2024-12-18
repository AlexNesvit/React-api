import React from 'react';
import CountryCard from '../utils/CountryCard';
import './main.css';

const Main = ({ countries, selectedRegion, setSelectedRegion, countriesOption }) => {
    const uniqueRegions = [...new Set(countriesOption.map(country => country.region))];

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };

    // Filtrer les pays selon la région sélectionnée
    const filteredCountries = selectedRegion
        ? countries.filter(country => country.region === selectedRegion)  // Filtre les pays selon la région
        : countries;  // Si aucune région n'est sélectionnée, afficher tous les pays

    // Compteur dynamique
    const countryCount = filteredCountries.length;

    return (
        <>
            <main>
                <h2>Sélectionnez votre région</h2>

                <label htmlFor="region">Sélectionnez votre région</label>
                <select
                    id="region"
                    value={selectedRegion}
                    onChange={handleRegionChange}
                >
                    <option value="">Toutes les régions</option>
                    {/* Affichage des options des régions */}
                    {uniqueRegions.map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </select>

                {/* Compteur de pays */}
                <p className="country-counter">
                    {countryCount} {countryCount === 1 ? 'pays affiché' : 'pays affichés'}
                </p>

                {/* Affichage des pays correspondant à la région sélectionnée */}
                <div className="countries-list">
                    {filteredCountries.length > 0 ? (
                        filteredCountries.map((country) => (
                            <CountryCard key={country.cca3} country={country} />
                        ))
                    ) : (
                        <p>Aucun pays trouvé dans cette région.</p>
                    )}
                </div>
            </main>
        </>
    );
};

export default Main;
