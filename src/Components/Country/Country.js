import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, population, flag, capital, area } = props.countries;
    return (
        <div className='countries'>
            <div className='country'>
                <h3>{name}</h3>
                <img src={flag} alt="" />
                <p><b>Capital:</b> {capital}</p>
                <p><b>Area:</b> {area} sqr km</p>
                <p><b>Population:</b> {population}</p>
                <button onClick={() => props.handleAddCountry(props.countries)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;