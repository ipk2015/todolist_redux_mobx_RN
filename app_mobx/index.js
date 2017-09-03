/**
 * Created by patrickfeng on 2017/9/1.
 */
'use strict';
import React, {Component} from 'react';
import {useStrict} from 'mobx';
import {Provider as MobxProvider,observer} from 'mobx-react/native';
import Store from './store/Store';
const store = new Store();
import App from './screens/App';

useStrict(true);
@observer
export default class MobxTodoList extends Component {
    render() {
        return (
            <MobxProvider store={store}>
                <App ></App>
            </MobxProvider>
        );
    }
}


