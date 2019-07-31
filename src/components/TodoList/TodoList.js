import React  from 'react'
import {PropTypes} from 'prop-types'
import './TodoList.css'
const TodoList = ({children}) => (
    <ul className = 'todos-list'>
        {children}
    </ul>
);
TodoList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ])
};
export default TodoList
