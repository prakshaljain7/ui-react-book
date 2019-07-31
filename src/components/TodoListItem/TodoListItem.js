import React from 'react'
import _ from 'lodash'
import classNames from 'classname'
import './TodoListItem.css'
import {PropTypes} from 'prop-types'
const TodoListItem =  ({todo , handleClick }) =>(
    <li className={classNames('todo-list-item', { completed: todo.completed })}
    onClick ={ handleClick(todo.id)}
    >
        {todo.description}
    </li>
);
TodoListItem.defaultProps = {
    todo: {},
    toggleTodo: _.noop
};
TodoListItem.propTypes = {
    todo: PropTypes.shape({
    // eslint-disable-next-line react/no-typos
    completed: PropTypes.boolean,
    description: PropTypes.string,
    id: PropTypes.number
    }),
    handleClick: PropTypes.func
    };
export default TodoListItem;