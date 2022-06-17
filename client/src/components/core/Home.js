import {connect } from "react-redux";
// import { useNavigate } from 'react-router-dom';
import React, { useEffect }  from 'react'
import {getNotes} from "../../redux/notes/selectors"
import { getNotesList } from '../../redux/notes/operations';
import {getTodo} from "../../redux/todo/selectors"
import { getTodoList } from '../../redux/todo/operations';

const Home = ({notes, todo, getNotesList, getTodoList}) => {
    // const navigate = useNavigate()

    useEffect(() => {
        getNotesList();
        getTodoList();
    }, [])


    return(
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notes: getNotes(state),
        todo: getTodo(state),
    };
}

const mapDispatchToProps = {
    getNotesList,
    getTodoList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);