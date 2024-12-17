import React from 'react';
import CountryCard from '../utils/CountryCard';
import './main.css';

const Main = ({ countries, selectedRegion, setSelectedRegion }) => {
    // Extraction des régions uniques
    const uniqueRegions = [...new Set(countries.map(country => country.region))];
    console.log(uniqueRegions);

    // Gestion du changement de région
    const handleRegionChange = (event) => {
        
        setSelectedRegion(event.target.value);  // Met à jour l'état de la région sélectionnée
    };

    // Filtrer les pays selon la région sélectionnée
    const filteredCountries = selectedRegion
        ? countries.filter(country => country.region === selectedRegion)  // Filtre les pays selon la région
        : countries;  // Si aucune région n'est sélectionnée, afficher tous les pays

    return (
        <>
            <main>
                <h2>Sélectionnez votre région</h2>

                <label htmlFor="region">Sélectionnez votre région</label>
                <select id="region" value={selectedRegion} onChange={handleRegionChange}>
                    <option value="">Toutes les régions</option>
                    {uniqueRegions.map((region, index) => (
                        <option key={index} value={region}>
                            {region}
                        </option>
                    ))}
                </select>

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
