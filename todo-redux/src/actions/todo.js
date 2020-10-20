import { ADD_TODO, REMOVE_TODO } from './todo.types';


export const addtodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
})