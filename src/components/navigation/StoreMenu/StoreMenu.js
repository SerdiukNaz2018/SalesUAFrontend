import React, { Component } from "react";
import StoreMenuItem from "../StoreMenuItem/StoreMenuItem";
import axios from "axios";
import Loader from "../../../UI/Loader/Loader";

class StoreMenu extends Component {
    state = {
        loading: true,
        stores: [],
    };

    componentDidMount() {
        axios
            .get("https://localhost:44383/api/shops")
            .then(response => {
                this.setState({ loading: false, stores: response.data });
            })
            .catch(error => {
                this.setState({loading: false});
                console.log(error);
            });
    }

    render() {
        const storeItems = this.state.stores.map((store, index) => (
            <StoreMenuItem
                key={index}
                storeId={store.id}
                storeName={store.title}
            />
        ));

        return <div>{this.state.loading ? <Loader mainColor = "white" shadow = "rgb(255, 164, 252)"/> : storeItems}</div>;
    }
}

export default StoreMenu;
