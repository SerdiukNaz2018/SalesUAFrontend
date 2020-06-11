import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Store from "../Store/Store";
import axios from "axios";

class StoresContainer extends Component {
    state = {
        stores: [],
    };

    componentDidMount() {
        axios
            .get("https://localhost:44383/api/shops")
            .then(response => {
                this.setState({ stores: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const stores = this.state.stores.map(store => (
            <Route
                key={store.id}
                path={"/" + store.id}
                render={() => <Store storeId={store.id} storeName = {store.title}/>}
            />
        ));

        return (
            <div>
                <Redirect from="/" to="/1" />
                {stores}
            </div>
        );
    }
}

export default StoresContainer;
