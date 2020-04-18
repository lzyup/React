import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import change from './change'

export default combineReducers({
    todos,
    visibilityFilter,
    change
})