import React, { Component } from "react";
import axios from "axios";
import classes from "./Store.module.css";
import Product from "../../components/Product/Product";
import Loader from '../../UI/Loader/Loader';

class Store extends Component {
    state = {
        loading: true,
        products: []
    };

    componentDidMount() {
        axios
            .get("https://course-project-react.firebaseio.com/storeProducts/" + this.props.storeId + ".json")
            .then(response => {
                this.setState({
                    loading: false,
                    products: response.data
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        const products = this.state.products.map(product => (
            <Product
                key={product.Id}
                title = {product.Title}
                imageAdress={product.ImagePath}
                oldPrice={product.OldPrice}
                newPrice={product.NewPrice}
                description={product.Description}
                discount = {product.DiscountPercent}
            />
        ));
        return (
            <React.Fragment>
                <div className={classes.ProductsGrid}>
                    {this.state.loading ? <Loader mainColor = "#DA70D6" shadow = "rgb(255, 164, 252)"/> : products}
                </div>
            </React.Fragment>
        );
    }
}

export default Store;
