import axios from "axios";
import * as actions from './actions';

export const getNotesList = () => {
    return async dispatch => {
        try{
            const response = await axios.get('http://localhost:5000/notes');
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
            const response = await axios.post(`http://localhost:5000/notes`, notes);
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
            const response = await axios.put(`http://localhost:5000/notes/${notes._id}`, notes);
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
            const response = await axios.delete(`http://localhost:5000/notes/${notes._id}`);
            if(response.status === 200) 
                dispatch(actions.notesDeleteAction(response.data));
        } catch(ex) {
            console.log(ex)
        }
    }
}

// notes ...