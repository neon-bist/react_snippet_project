import React, { useCallback, useEffect, useState } from "react";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";
import { connect } from "react-redux";

interface AppProps {
  todos: {isLoading: boolean, todos: Todo[]};
  fetchTodos: Function;
}
const _App = (props: AppProps): JSX.Element => {
  const {isLoading, todos} = props.todos;
  const onButtonClick = (): void => {
    props.fetchTodos();
  };


  const renderList = () => {
    return todos.map((todo) => (
      <div key={todo.id} >
        {todo.title}
      </div>
    ));
  };

  return (
    <div>
      <button onClick={onButtonClick}>Fetch</button>
      {isLoading && "Loading...."}
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState) => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
// export function App1(props: AppProps): JSX.Element {
//   return <div> Hello {props.color}</div>;
// }
