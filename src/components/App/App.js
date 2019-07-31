import React,{Component} from 'react'
import _ from 'lodash'
import './App.css'
import TodoList from '../TodoList/TodoList'
import TodoListItem from '../TodoListItem/TodoListItem'
export default class App extends Component{
    constructor(...args){
        super(...args);
        this.state= {
            todos:{}
        };
    }
    componentDidMount(){
        this.setState({
                todos: {
                1: { id: 1, completed: false, description: 'task 1' },
                2: { id: 2, completed: false, description: 'task 2' },
                3: { id: 3, completed: false, description: 'task 3' },
                4: { id: 4, completed: false, description: 'task 4' }
                }
               }); 
    }
    toggleTodo = (id)=>(e) => {
        e.preventDefault();
        const todos = _.clone(this.state.todos);
        todos[id].completed = !(todos[id].completed);
        this.setState=({todos});
    }
    generateTodoList = (todo,id)=>(
        <TodoListItem
        key = {id}
        todo = {todo}
        handleClick= {this.toggleTodo} />
    )
    render(){
        const {todos} = this.state
        return(
            <TodoList>
                {_.map(todos,this.generateTodoList 
                )}
            </TodoList> )}
}