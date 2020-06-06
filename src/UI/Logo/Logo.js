import React from 'react';
import classes from './Logo.module.css';
import saleslogo from './sale-logo.png';

const logo = props => (
    <div className = {classes.Logo}>
        <img src={saleslogo} alt="sale-logo" height = '170px' width = '170px'/>
    </div>
);

export default logo;
