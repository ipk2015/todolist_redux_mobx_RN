/**
 * Created by patrickfeng on 2017/9/1.
 */
import {observable,action,computed} from 'mobx';
const VisibilityFilters =['SHOW_ALL','SHOW_COMPLETED','SHOW_ACTIVE'];

export default class Store{
    @observable todos=[];
    @observable visibilityFilter = VisibilityFilters[0];
    @computed get visibleTodos(){
        switch (this.visibilityFilter){
            case VisibilityFilters[0]:
                return this.todos;
            case VisibilityFilters[1]:
                return this.todos.filter(todo=>todo.completed);
            case VisibilityFilters[2]:
                return this.todos.filter(todo=>!todo.completed);
            default:
                return this.todos;
        }
    }
    @action
    setVisibilityFilter(nextFilter){
        this.visibilityFilter = nextFilter;
    }
    @action
    onAddClick(text=''){
        if(text){
            let _this = this;
            this.todos.push({
                text:text,
                completed:false,
                position:_this.todos.length
            })
        }
    }
    @action
    onTodoClick(index){
        this.todos[index].completed=true;
    }
}
