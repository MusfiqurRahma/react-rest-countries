import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, flag, region, capital, population } = props.country;
    console.log(props);
    return (
        <div className='country'>
            <h3>This is:{name}</h3>
            <img src={flag} alt="" />
            <p><small>Region:{region}</small></p>
            <h4>Capital:{capital}</h4>
            <p>Population:{population}</p>
        </div>
    );
};

export default Country;