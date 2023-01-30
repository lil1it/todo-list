import React, { useContext } from "react";
import { todoContext } from "../todoItem/TodoContext";
import styled from "styled-components";
import Button from "../button/Button";

export default function TodoList() {
  const { state, remove, setTodo, setDone } = useContext(todoContext);

  const editTodoHandler = (name, id) => {
    
    remove(id);
    setTodo(name);
  };

  function chengeCheckbox(id) {
    setDone(id);
  }
  return (
    <List>
      <H1> TODO LIST : </H1>
      {state.map((todo, index) => {
        // console.log(todo.id);
        return (
          <ListItems key={index}>
            <CurrentText>
              <CheckBox
                id="check"
                type="checkbox"
                checked={todo.done}
                onChange={() => chengeCheckbox(todo.id)}
              />
            

              {todo.done ? (
                <CompleteText htmlFor="name">{todo.name}</CompleteText>
              ) : (
                <UnComplete htmlFor="name">{todo.name}</UnComplete>
              )}
            </CurrentText>

            {/* {todo.done ? (
              <Button onClick={() => done(todo.id)}>RETURN</Button>
            ) : (
              <Button onClick={() => done(todo.id)}>DONE</Button>
            )} */}
            <div>
              {" "}
              <Button onClick={() => editTodoHandler(todo.name, todo.id)}>
                EDIT
              </Button>
              <Button onClick={() => remove(todo.id)}>remove</Button>
            </div>
          </ListItems>
        );
      })}
    </List>
  );
}

const CurrentText = styled.div`
  display: flex;
`;

const CheckBox = styled.input`
  margin-right: 1rem;
  background-color: blueviolet;
`;

const List = styled.div`
  width: 90%;
`;
const H1 = styled.h2`
  color: white;
  font-weight: 900;
`;
const ListItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  border: none;
  border-radius: 5px;
  box-shadow: #c602c6 15px 10px 15px 5px;
  background: white;
  margin-bottom: 2rem;
`;

const CompleteText = styled.label`
  text-decoration: line-through;
  color: #c602c6;
  &::before{
    border-color:red !important;}
`;
const UnComplete = styled.label`
  text-decoration: none;
  color: black;
  &::before{
    border-color:red !important;}
`;
