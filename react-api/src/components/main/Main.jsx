import React from 'react'


const Main = ({ countries }) => {
    const uniqueRegions = [...new Set(countries.map(country => country.region))];
    return (
        <>
            <main>
                <h2>Selectionez votre région</h2>


                <select>
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