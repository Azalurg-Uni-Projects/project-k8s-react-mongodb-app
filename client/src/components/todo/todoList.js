import { useDispatch, useSelector, connect } from "react-redux";
import {getTodo} from "../../redux/todo/selectors"
import { Link } from "react-router-dom";
import { getTodoList, deleteTodo, editTodo } from '../../redux/todo/operations';
import React, { useEffect }  from 'react'

const TodoList = ({todo, getTodoList, deleteTodo, editTodo}) => {
    const dispatch = useDispatch();

    const done = (item) =>{
        if (!item.done) return(<div style={{color: "red"}}>Done: Todo</div>);
        else return(<div style={{color: "green"}}>Done: Finished</div>)
    }

    const doIt = (item) => {
        item.done = !item.done;
        editTodo(item)
    }


    useEffect(() => {
        getTodoList();
    }, [])

    return (
        <div>
            <h1>Todo List</h1>
            <div className="List">
                {todo.map(item => (
                    <div key={item._id}>
                        <h3>{item.title}</h3>
                        Author: {item.author}<br/>
                        Deadline: {new Date(item.deadline).toLocaleDateString('pl-PL')}
                        {done(item)}
                        <button className="Bnt " onClick={() => doIt(item)}>Do</button>
                        <button className="Bnt Delete" onClick={() => deleteTodo(item)}>Delete</button>
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
    getTodoList,
    deleteTodo,
    editTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
