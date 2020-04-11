//容器组件（将展示组件连接到Redux）

import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'
import {VisibilityFilters} from '../actions'

const getVisibleTodos = (todos,filter)=>{
    console.log('测试filter--->',filter);
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t=>t.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t=>!t.completed)
        default:
            throw new Error('Unknow filter:' + filter)
    }
}

const mapStateToProps = state=>{
    console.log('测试state--->',state)
    return { todos: getVisibleTodos(state.todos, state.visibilityFilter)} 
}

const mapDispatchToProps = dispatch=>({
    toggleTodo:id=>dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)