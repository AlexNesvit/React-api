import React, { useState, useEffect } from 'react';
import './App.css'
import getFlags from './api/get_flags'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App() {
  const [countries, setCountries] = useState([])
  const [selectedRegion, setSelectedRegion] = useState(''); 

  // Filtrer les pays en fonction de la région sélectionnée
  const filteredCountries = selectedRegion
    ? countries.filter((country) => country.region === selectedRegion)
    : countries;

const fetchCountries = async()  =>{
  const data = await getFlags()
  setCountries(data)
}
  useEffect(() => {
    fetchCountries()
  }, []);


  
  return (
    <>
      <Header />
      <Main 
          countries={filteredCountries} 
          countriesOption={countries}
          selectedRegion={selectedRegion} 
          setSelectedRegion={setSelectedRegion} 
        />
    </>
  )
}

export default App
