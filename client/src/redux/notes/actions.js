import types from './types';

export const notesGetAction = (notes) => ({
    type: types.NOTES_GET,
    payload: notes
});

export const notesAddAction = (newNotes) => ({
    type: types.NOTES_ADD,
    payload: newNotes
});

export const notesEditAction = (notes) => ({
    type: types.NOTES_EDIT,
    payload: notes
});


export const notesDeleteAction = (notes) => ({
    type: types.NOTES_DELETE,
    payload: notes
});
