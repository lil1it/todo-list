import React, { createContext, useReducer, useState } from "react";



import reducer, { initialState } from "../Reduser";

export let todoContext = createContext({});

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");
  

 const remove = (id) => dispatch({type: 'remove', id,})
 const addTodo = (name) => dispatch({type: 'add', name})
 const setDone = (id) => dispatch({type: 'complete', id})
  const values = {
    state:state.todos,
    dispatch,
    remove,
    addTodo,
    setDone,
    setTodo,
    todo
  };

  return (
    <>
      <todoContext.Provider value={values}>{children}</todoContext.Provider>
    </>
  );
}

