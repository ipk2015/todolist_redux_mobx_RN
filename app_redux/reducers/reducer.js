/**
 * Created by patrickfeng on 2017/8/31.
 */
import {combineReducers} from 'redux';
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters} from '../actions/actions';
const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state=SHOW_ALL,action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

function todos(state=[],action){
    switch (action.type){
        case ADD_TODO:
            if(action.text){
                return [...state,{text:action.text,completed:false,position:state.length}];
            }else{
                return state;
            }
        case COMPLETE_TODO:
            return [...state.slice(0,action.index),
                    Object.assign({},state[action.index],{completed:true}),
                ...state.slice(action.index+1)];
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter

})

export default todoApp;