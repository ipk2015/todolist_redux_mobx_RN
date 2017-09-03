/**
 * Created by patrickfeng on 2017/8/31.
 */
'use strict';
import React, {Component} from 'react';
import  {
    StyleSheet,
    View,
} from 'react-native';
import {observer,inject} from 'mobx-react/native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

@inject('store') @observer
export default class App extends Component {

    render() {
        const {store} = this.props;
        return (
            <View style={styles.container}>
                <AddTodo onAddClick={text => store.onAddClick(text)}/>
                <TodoList
                    todos={store.visibleTodos}
                    onTodoClick={index=>store.onTodoClick(index)}
                />
                <Footer filter={store.visibilityFilter}
                        onFilterChange={nextFilter=>store.setVisibilityFilter(nextFilter)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dddddd',
        alignItems: 'center',
        flex:1,
        paddingTop:40
    },
});

