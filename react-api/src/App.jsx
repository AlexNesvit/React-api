import React, { useState, useEffect } from 'react';
import './App.css'
import getFlags from './api/get_flags'
import Header from './components/header/Header'
import Main from './components/main/Main'


function App() {
  const [countries, setCountries] = useState([])

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
    <Main countries={countries} />

    </>
  )
}

export default App
