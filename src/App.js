import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';
import names from '../src/data/data.json';

function App() {
  const [countries, setCountries] = useState([]);
  const [countryAdded, setcountryAdded] = useState([]);
  const [state, setstate] = useState([]);

  useEffect(() => {
    setstate(names);
  }, []);


  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, []);

  const styleText = {
    textAlign: 'center'
  }

  const handleAddCountry = (country) => {
    const newCountryAdded = [...countryAdded, country];
    setcountryAdded(newCountryAdded);
  }

  return (
    <React.Fragment>
      <h2 style={styleText}>Countries of the world</h2>
      <Cart cart={countryAdded}></Cart>
      <div className='countries'>
        {
          countries.map((country) => <Country handleAddCountry={handleAddCountry} key={country.alpha3Code} countries={country}></Country>)
        }
      </div>
    </React.Fragment>
  );
}

export default App;
