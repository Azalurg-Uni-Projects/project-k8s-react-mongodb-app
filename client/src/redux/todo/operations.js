import axios from "axios";
import * as actions from './actions';
const SERVER_IP = process.env.SERVER_IP || "127.0.0.1"
const API_PORT = process.env.API_PORT || "5000"

export const getTodoList = () => {
    return async dispatch => {
        try{
            const response = await axios.get(`http://${SERVER_IP}:${API_PORT}/todo`);
            if(response.status === 200)
                dispatch(actions.todoGetAction(response.data));
        }catch(error) {
            console.log(error)
        }
    }
}

export const addTodo = (todo) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://${SERVER_IP}:${API_PORT}/todo`, todo);
            if(response.status === 200) 
                dispatch(actions.todoAddAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}

export const editTodo = (todo) => {
    return async dispatch => {
        try {
            const response = await axios.put(`http://${SERVER_IP}:${API_PORT}/todo/${todo._id}`, todo);
            if(response.status === 201){
                dispatch(actions.todoEditAction(response.data));
            } else {
                console.log(response.status);
            }
                
        } catch(ex) {
            console.log(ex)
        }
    }
}

export const deleteTodo = (todo) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`http://${SERVER_IP}:${API_PORT}/todo/${todo._id}`);
            if(response.status === 200) 
                dispatch(actions.todoDeleteAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}


// todo ...