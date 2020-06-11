import React from "react";
import classes from "./Product.module.css";

const Product = props => (
    <div className={classes.Product} style = {props.discount ? {paddingBottom: '80px'} : null}>
        {props.title ? (
            <div className={classes.TitleHolder}>
                <h2 className={classes.Title}>{props.title}</h2>
            </div>
        ) : null }
        <div className={classes.ImageHolder}>
            <img src={props.imageAdress} alt="product-preview" />
        </div>
        {props.description ? (
            <div className={classes.DescriptionHolder}>
                <p className={classes.Description}>{props.description}</p>
            </div>
        ) : null}
        {props.oldPrice ? (
            <h3 className={classes.OldPrice}>{props.oldPrice} грн</h3>
        ) : null}
        {props.newPrice ? (
            <h2 className={classes.NewPrice}>{props.newPrice} грн</h2>
        ) : null}
        {props.discount ? (
            <div className={classes.Discount}>
                <h2>-{props.discount}%</h2>
            </div>
        ) : null}
    </div>
);

export default Product;
