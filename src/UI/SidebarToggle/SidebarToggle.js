import React from 'react';
import classes from './SidebarToggle.module.css';

const SidebarToggle = props => (
    <div className = {classes.Toggle}>
        <div  className = {classes.ToggleBar}></div>
        <div  className = {classes.ToggleBar}></div>
        <div  className = {classes.ToggleBar}></div>
    </div>
);

export default SidebarToggle;
