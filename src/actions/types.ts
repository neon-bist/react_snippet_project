import { FetchTodoPendingAction, FetchTodoFulfilledAction, FetchTodoRejectedAction} from "./todos";

export enum ActionTypes {
  FETCH_TODO_FULFILLED,
  FETCH_TODO_PENDING,
  FETCH_TODO_REJECTED
}

export type Action = FetchTodoPendingAction | FetchTodoFulfilledAction | FetchTodoRejectedAction;
