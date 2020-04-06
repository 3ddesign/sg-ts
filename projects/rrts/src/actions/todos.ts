import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types'; 

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
            const responce = await axios.get<Todo[]>(url); 

            dispatch<FetchTodosAction>({
                type: ActionTypes.fetchTodos,
                payload: responce.data
            });
        }
};

export const deletehTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }; 
};