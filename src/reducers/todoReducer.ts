import { Todo, Action, ActionTypes } from "../actions";

export const todoState= {
  isLoading: false,
  todos: [] as Todo[]
}

export function todoReducer(state = todoState, action: Action) {
  switch (action.type) {

    case ActionTypes.FETCH_TODO_PENDING:
      return {...state, isLoading: true};

    case ActionTypes.FETCH_TODO_FULFILLED:
      return {...state, isLoading: false, todos: action.payload};

    case ActionTypes.FETCH_TODO_REJECTED:
          return {...state, isLoading: false}
          
    default:
      return state;
  }
}
