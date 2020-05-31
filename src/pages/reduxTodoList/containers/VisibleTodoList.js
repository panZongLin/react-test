import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapStateToProps = state => {
    console.log('TodoList state', state)
    return ({
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        toggleTodo: (id) => dispatch(toggleTodo(id))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)