import React from 'react';
import './search-box.styles.css';
export const SearchBox = ({placeholder, hc}) => (

    <input className="search" type='search' placeholder={placeholder} onChange={hc}></input>
);
