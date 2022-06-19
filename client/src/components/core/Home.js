import {connect} from "react-redux";
import axios from "axios";
import React, { useEffect, useState }  from 'react'
import {getNotes} from "../../redux/notes/selectors"
import { getNotesList } from '../../redux/notes/operations';
import {getTodo} from "../../redux/todo/selectors"
import { getTodoList } from '../../redux/todo/operations';

const Home = ({notes, todo, getNotesList, getTodoList}) => {
    const [lastTodo, setTodo] = useState()
    const [lastNotes, setNotes] = useState()

    const done = (item) =>{
        if (!item.done) return(<div style={{color: "red"}}>Done: Todo</div>);
        else return(<div style={{color: "green"}}>Done: Finished</div>)
    }


    useEffect(() => {
        async function k(){
            try{
                const response1 = await axios.get('http://localhost:5000/last/todo');
                if(response1.status === 200){
                    setTodo(response1.data);
                }
                const response2 = await axios.get('http://localhost:5000/last/notes');
                if(response2.status === 200){
                    setNotes(response2.data);
                }
            }catch(error) {
                console.log(error)
            }
        }
        k();
        getNotesList();
        getTodoList();
    }, [])


    return(
        <div>
            <h1>Home Page</h1>
            {lastTodo ? <div key={lastTodo._id}>
                    <h3>{lastTodo.title}</h3>
                    Author: {lastTodo.author}<br/>
                    Deadline: {new Date(lastTodo.deadline).toLocaleDateString('pl-PL')}
                    {done(lastTodo)}
            </div> : <></>}
            <br/>
            {lastNotes ? <div key={lastNotes._id}>
                        <h3>{lastNotes.author}</h3>
                        <textarea value={lastNotes.text} readOnly={true}></textarea>
                    </div> : <></>}
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