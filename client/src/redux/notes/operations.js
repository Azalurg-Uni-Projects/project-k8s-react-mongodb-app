import axios from "axios";
import * as actions from './actions';

export const getNotesList = () => {
    return async dispatch => {
        try{
            const response = await axios.get(`http://todo-app-k8s.com/api/notes`);
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
            const response = await axios.post(`http://todo-app-k8s.com/api/notes`, notes);
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
            const response = await axios.put(`http://todo-app-k8s.com/api/notes/${notes._id}`, notes);
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
            const response = await axios.delete(`http://todo-app-k8s.com/api/notes/${notes._id}`);
            if(response.status === 200) 
                dispatch(actions.notesDeleteAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}

// notes ...