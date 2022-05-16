import { combineReducers } from "redux";
import { todoReducer, todoState } from "./todoReducer";

export interface StoreState {
  todos: typeof todoState;
}

export const reducers = combineReducers<StoreState>({
  todos: todoReducer,
});
