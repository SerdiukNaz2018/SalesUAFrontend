import React from "react";
import classes from "./Product.module.css";

const Product = props => (
    <div className={classes.Product}>
        <h2 className = {classes.Title}>{props.title}</h2>
        <div className = {classes.ImageHolder}>
        <img
            src= {props.imageAdress}
            alt="product-preview"
        />
        </div>
        <p className = {classes.Description}>{props.description}</p>
        <h3 className = {classes.OldPrice}>{props.oldPrice} грн</h3>
        <h2 className = {classes.NewPrice}>{props.newPrice} грн</h2>
        <div className = {classes.Discount}>
            <h2>-{props.discount}%</h2>
        </div>
        
    </div>
);

export default Product;
