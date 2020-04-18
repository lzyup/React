import React from 'react'
import PropTypes from 'prop-types'
class Todo extends React.Component {
    componentDidMount(){
    }
    render() {
        return (
            <li
                onClick={this.props.onClick}
                style={{ textDecoration: this.props.completed ? 'line-through' : 'nonw' }}
            >
                {this.props.text}
            </li>
        )
    }
}
// const Todo = ({onClick,completed,text})=>(
// )

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo