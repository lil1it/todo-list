// import { ACTIONS } from "./constants";

export const initialState = { todos: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const NewTodo = { id: `${new Date().toISOString()}-${action.name}`, name: action.name, done: false };

      return {
        ...state,
        todos: [...state.todos, NewTodo],
      };
    }

    case "complete":
      const doneTodo = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
      return { ...state, todos: doneTodo };
    case "remove":
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.id);
      return {
        todos: filteredTodos,
      };

    default:
      return state;
  }
};

export default reducer;
