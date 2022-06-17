import types from "./types";

export const todoReducer = (state = [], action) => {
    console.log(action);
    const payload = action.payload;
    switch(action.type) {
        case types.TODO_GET:
            return [...payload];
        
        case types.TODO_DELETE:
            return state.filter(el => el._id !== payload._id);
        
        case types.TODO_ADD:
            return [...state, payload];

        case types.TODO_EDIT:
            return [...state.filter(el => el._id !== payload._id), payload]; 

        default: 
            return state;
    }
};
