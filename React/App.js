import store from './redux'
import React, { Component } from './node_modules/react';
import { Provider } from './node_modules/react-redux'
import User from './react-redux/User'
export default class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <User />
            </Provider>
        )
    }
}


