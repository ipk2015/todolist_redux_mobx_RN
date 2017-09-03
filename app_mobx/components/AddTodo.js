/**
 * Created by patrickfeng on 2017/8/31.
 */
'use strict';
import React, {Component} from 'react';
import  {
    StyleSheet,
    View,
    TextInput,
    Button
} from 'react-native';
const PropTypes = require('prop-types');

import {observer} from 'mobx-react/native';

@observer
export default class AddTodo extends Component {

    static propTypes = {
        onAddClick: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            text:''
        }
    }
    onPressButton(){
        this.props.onAddClick(this.state.text);
        this.setState({
            text:''
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput value={this.state.text} onChangeText={(text)=>this.setState({text})}
                            style={styles.textInput}
                           underlineColorAndroid="transparent"/>
                <Button  title={"Add"} onPress={()=>this.onPressButton()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd",
        alignItems: 'center',
        flexDirection:'row'
    },
    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex:1
    }
});
