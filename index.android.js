/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import AppRedux from './app_redux';
import AppMobx from './app_mobx';

AppRegistry.registerComponent('todolist_redux_mobx', () => AppRedux);
