import React from 'react'


const Main = ({ countries }) => {
    const uniqueRegions = [...new Set(countries.map(country => country.region))];
    console.log(uniqueRegions)
    return (
        <>
            <main>
                <h2>Selectionez votre région</h2>

                <label htmlFor="region">Sélectionnez votre région</label>
                <select id="region">
                    {uniqueRegions.map((region, index) => (
                        <option key={index} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </main>
        </>
    )
}

export default Main