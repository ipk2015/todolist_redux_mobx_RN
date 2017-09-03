/**
 * Created by patrickfeng on 2017/8/31.
 */
'use strict';
import React, {Component} from 'react';
import  {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Button
} from 'react-native';
const PropTypes = require('prop-types');
import {observer} from 'mobx-react/native';

@observer
export default class Todo extends Component {

    static propTypes = {
        text:PropTypes.string.isRequired,
        onClick:PropTypes.func.isRequired,
        completed:PropTypes.bool.isRequired
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick}>
                <Text style={[styles.todoText,{textDecorationLine:this.props.completed?'line-through':'none'}]} >{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dddddd',
        alignItems: 'center',
    },
    todoText:{
        fontSize:20,
        color:'#666666'
    }
});
