/**
 * Created by patrickfeng on 2017/8/31.
 */
'use strict';
import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import todoApp from './reducers/reducer';

const store = createStore(todoApp);

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
