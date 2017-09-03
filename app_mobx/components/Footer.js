/**
 * Created by patrickfeng on 2017/8/31.
 */
'use strict';
import React, {Component} from 'react';
import  {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button
} from 'react-native';

const PropTypes = require('prop-types');
var {height, width} = Dimensions.get('screen');
import {observer} from 'mobx-react/native';

@observer
export default class Footer extends Component {

    static propTypes = {
        onFilterChange: PropTypes.func.isRequired,
        filter:PropTypes.oneOf(['SHOW_ALL','SHOW_COMPLETED','SHOW_ACTIVE']).isRequired,
    }

    renderFilter(filter,name){
        var _this = this;
        if(filter === this.props.filter){
            return <Text>{name} </Text>;
        }
        return(
            <Button title={name} onPress={()=>_this.props.onFilterChange(filter)}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderFilter('SHOW_ALL','ALL')}
                {this.renderFilter('SHOW_COMPLETED','Completed')}
                {this.renderFilter('SHOW_ACTIVE','Active')}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dddddd',
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection:'row',
        marginTop:10,
        width:width
    },
});
