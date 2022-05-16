import { Dispatch } from "redux";
import { ActionTypes } from "./types";

import { todos } from "./mockData";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
}

export interface FetchTodoPendingAction {
  type: ActionTypes.FETCH_TODO_PENDING;
}
export interface FetchTodoRejectedAction {
  type: ActionTypes.FETCH_TODO_REJECTED,
  payload: string,
}
export interface FetchTodoFulfilledAction {
  type: ActionTypes.FETCH_TODO_FULFILLED,
  payload: Todo[];
}


export function fetchTodos() {
  return async function (dispatch: Dispatch) {
    dispatch<FetchTodoPendingAction>({
      type: ActionTypes.FETCH_TODO_PENDING
    });
    try{
    // const response = await new Promise<{ data: Todo[] }>((resolve) => {
    //   setTimeout(() => resolve({ data: todos }), 3000);
    // });
    const response = await axios.get('/todos');
    dispatch<FetchTodoFulfilledAction>({
      type: ActionTypes.FETCH_TODO_FULFILLED,
      payload: response.data,
    });
  }catch(e){
    dispatch({type: ActionTypes.FETCH_TODO_REJECTED, payload: "Error Occurred!"})
    setTimeout(()=> dispatch({type: ActionTypes.FETCH_TODO_REJECTED, payload: ""}),2000)
  }
  };
}

