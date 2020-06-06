import React from "react";
import classes from "./Loader.module.css";

const Loader = props => (
    <div
        style={{
            borderLeft: '1.1em solid ' + props.mainColor,
            borderTop: '1.1em solid ' + props.shadow,
            borderBottom: '1.1em solid ' + props.shadow,
            borderRight: '1.1em solid ' + props.shadow,
        }}
        className={classes.Loader}
    ></div>
);

export default Loader;
