import axios from "axios";
import * as actions from './actions';
const SERVER_IP = process.env.SERVER_IP || "127.0.0.1"
const API_PORT = process.env.API_PORT || "5000"

export const getNotesList = () => {
    return async dispatch => {
        try{
            const response = await axios.get(`http://${SERVER_IP}:${API_PORT}/notes`);
            if(response.status === 200)
                dispatch(actions.notesGetAction(response.data));
        }catch(error) {
            console.log(error)
        }
    }
}

export const addNotes = (notes) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://${SERVER_IP}:${API_PORT}/notes`, notes);
            if(response.status === 200) 
                dispatch(actions.notesAddAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}

export const editNotes = (notes) => {
    return async dispatch => {
        try {
            const response = await axios.put(`http://${SERVER_IP}:${API_PORT}/notes/${notes._id}`, notes);
            if(response.status === 201){
                dispatch(actions.notesEditAction(response.data));
            }
                
        } catch(ex) {
            console.log(ex)
        }
    }
}

export const deleteNotes = (notes) => {
    return async dispatch => {
        try {
            const response = await axios.delete(`http://${SERVER_IP}:${API_PORT}/notes/${notes._id}`);
            if(response.status === 200) 
                dispatch(actions.notesDeleteAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}

// notes ...