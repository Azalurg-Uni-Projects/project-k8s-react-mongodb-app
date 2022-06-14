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

// todo ...