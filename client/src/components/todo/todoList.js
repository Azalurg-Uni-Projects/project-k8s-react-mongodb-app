import { useDispatch, useSelector, connect } from "react-redux";
// import { deleteTodoAction, finishTodoAction } from '../../redux/actions/todoActions'
import {getTodo} from "../../redux/todo/selectors"
import { Link } from "react-router-dom";
import { getTodoList } from '../../redux/todo/operations';
import React, { useEffect }  from 'react'

const TodoList = ({todo, getTodoList}) => {
    const dispatch = useDispatch();

    const done = (item) =>{
        if (!item.done) return(<div style={{color: "red"}}>Done: Todo</div>);
        else return(<div style={{color: "green"}}>Done: Finished</div>)
    }

    useEffect(() => {
        getTodoList();
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                {todo.map(item => (
                    <div key={item._id}>
                        <h3>{item.title}</h3>
                        Author: {item.author}<br/>
                        Deadline: {new Date(item.deadline).toLocaleDateString('pl-PL')}
                        {done(item)}
                    </div>
                ))}
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        todo: getTodo(state),
    };
}

const mapDispatchToProps = {
    getTodoList
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
