import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import StoresContainer from "./containers/StoresContainer/StoresContainer";

class App extends Component {
    render() {
        return (
            <Layout>
                <StoresContainer />
            </Layout>
        );
    }
}

export default App;
