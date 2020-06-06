import React from 'react';
import classes from './Sidebar.module.css';
import Logo from '../../UI/Logo/Logo';
import StoreMenu from '../navigation/StoreMenu/StoreMenu';

const sidebar = props => (
    <div className = {classes.Sidebar}>
        <Logo />
        <StoreMenu />
    </div>
);

export default sidebar;
