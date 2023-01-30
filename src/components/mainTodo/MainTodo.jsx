import React, { useContext } from "react";
import Button from "../button/Button";
import styled from "styled-components";

// import { ACTIONS } from "../constants";

import { todoContext } from "../todoItem/TodoContext";

export function Todo() {
  const { addTodo , todo, setTodo} = useContext(todoContext);
  const disabled = todo.trim().length > 0;

  const addTodoHandler = (e) => {
 
      e.preventDefault();
      addTodo(todo);
      setTodo("");
    
   
  };
  

  return (
    <Form>
      <Input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button onClick={addTodoHandler} disabled={!disabled}> ADD TODO </Button>
    </Form>
  );
}
const Input = styled.input`
  border: none;
  border-radius: 3px;
  padding: 10px 10px;
  margin-right: 1.5rem;
 width: 20rem;
 box-shadow: #9d019d 10px 8px 15px 5px;

`
const Form = styled.form`

`