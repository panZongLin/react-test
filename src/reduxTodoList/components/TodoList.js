import React from 'react';
import PropTypes from 'prop-types';


const TodoList = (props)=> {
    return(
        <ul>
            {props.todos.map((item, index)=> {
                return(
                    <li
                        key={index}
                        onClick={()=>props.toggleTodo(item.id)}
                        style={{
                            color: item.completed ? 'red' : 'green',
                            textDecoration: item.completed ? 'line-through' : 'none'
                        }} 
                    >
                        {item.text}
                    </li>
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default TodoList;