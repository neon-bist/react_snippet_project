import { FetchTodoPendingAction, FetchTodoFulfilledAction} from "./todos";

export enum ActionTypes {
  FETCH_TODO_FULFILLED,
  FETCH_TODO_PENDING,
}

export type Action = FetchTodoPendingAction | FetchTodoFulfilledAction;
