import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";
import { connect } from "react-redux";

interface AppProps {
  todos: {errorMsg: string, isLoading: boolean, todos: Todo[]};
  fetchTodos: Function;
}
const _App = (props: AppProps)=> {
  const {isLoading,errorMsg, todos} = props.todos;
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
      {errorMsg && <span style={{color:'red'}}>{errorMsg}</span>}
      {renderList()}
    </div>
  );
};

const mapStateToProps = ({ todos }: StoreState) => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos })(_App);
