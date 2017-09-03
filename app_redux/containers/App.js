/**
 * Created by patrickfeng on 2017/8/31.
 */
'use strict';
import React, {Component} from 'react';
import  {
    StyleSheet,
    View,
} from 'react-native';
import {connect} from 'react-redux';
const PropTypes = require('prop-types');
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions/actions';

class App extends Component {
    static propTypes = {
        visibleTodos:PropTypes.arrayOf(PropTypes.shape({
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired,
            position:PropTypes.number.isRequired
        }).isRequired).isRequired,
        visibilityFilter:PropTypes.oneOf([
            'SHOW_ALL',
            'SHOW_COMPLETED',
            'SHOW_ACTIVE'
        ]).isRequired
    }

    render() {
        const {dispatch,visibleTodos,visibilityFilter} = this.props;
        return (
            <View style={styles.container}>
                <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index=>dispatch(completeTodo(index))}
                />
                <Footer filter={visibilityFilter}
                        onFilterChange={nextFilter=>dispatch(setVisibilityFilter(nextFilter))}/>
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

function selectTodos(todos,filter) {
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed);
        default:
            return todos;
    }
}

function select(state) {
    return{
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}

export default connect(select)(App)
