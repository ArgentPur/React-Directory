import React from 'react';
import './wrapper.styles.css';

function Wrapper({ children }) {
    return <div className= 'wrapper'> {children} </div>
}

export default Wrapper;