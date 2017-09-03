/**
 * Created by patrickfeng on 2017/8/31.
 */
'use strict';
import React, {Component} from 'react';
import  {
    StyleSheet,
    View,
} from 'react-native';
const PropTypes = require('prop-types');
import Todo from './Todo';
import {observer} from 'mobx-react/native';

@observer
export default class TodoList extends Component {
    static propTypes = {
        onTodoClick:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired
    }

    render() {
        let _this=this;
        return (
            <View style={styles.container}>
                {this.props.todos.map(function (todo,index) {
                    return(
                        <Todo {...todo}
                              key={index}
                              onClick={()=>_this.props.onTodoClick(todo.position)}
                        />
                    )
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dddddd',
        alignItems: 'center',
    },
});
