import React, { Component } from "react";
import { Todo } from "./components/mainTodo/MainTodo";
import TodoList from "./components/todo-list/TodoList";
import Provider from "./components/todoItem/TodoContext";
import "./App.css"


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <Todo />
          <TodoList />
        </Provider>
      </div>
    );
  }
}
