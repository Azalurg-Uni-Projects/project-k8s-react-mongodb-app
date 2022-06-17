import types from "./types";

export const notesReducer = (state = [], action) => {
    console.log(action);
    const payload = action.payload;
    switch(action.type) {
        case types.NOTES_GET:
            return [...payload];
        
        case types.NOTES_DELETE:
            return state.filter(el => el._id !== payload._id);
        
        case types.NOTES_ADD:
            return [...state, payload];

        case types.NOTES_EDIT:
            return [...state.filter(el => el._id !== payload._id), payload]; 

        default: 
            return state;
    }
};
