import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./StoreMenuItem.module.css";

const StoreMenuItem = props => (
    <NavLink to={"/" + props.storeName} activeClassName={classes.Active}>
        <div className={classes.StoreMenuItem}>{props.storeName}</div>
    </NavLink>
);

export default StoreMenuItem;
