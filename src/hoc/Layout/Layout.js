import React from 'react';
import classes from './Layout.module.css';
import Sidebar from '../../components/Sidebar/Sidebar';

const layout = props => (
    <div>
        <Sidebar />
        <main className = {classes.Content}>
            {props.children}
        </main>
    </div>
);

export default layout;
