import types from './types';

export const todoGetAction = (todo) => ({
    type: types.TODO_GET,
    payload: todo
});

export const todoAddAction = (newTodo) => ({
    type: types.TODO_ADD,
    payload: newTodo
});

export const todoEditAction = (todo) => ({
    type: types.TODO_EDIT,
    payload: todo
});


export const todoDeleteAction = (todo) => ({
    type: types.TODO_DELETE,
    payload: todo
});
