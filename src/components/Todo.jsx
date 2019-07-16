import React, { useState } from "react";

const Todo = () => {
  const initialState = {
    todo: "",
    todoList: []
  };
  const [todoState, setTodoState] = useState(initialState);

  const handleFormState = event => {
    setTodoState({ ...todoState, [event.target.name]: event.target.value });
  };

  const addFormState = () => {
    const todoList = [...todoState.todoList];
    todoList.push(todoState.todo);
    const todo = "";
    setTodoState({ ...todoState, todoList, todo });
  };

  return (
    <React.Fragment>
      <input
        type="text"
        name="todo"
        placeholder="To do"
        value={todoState["todo"]}
        onChange={handleFormState}
      />
      <button type="button" onClick={addFormState}>
        Add
      </button>
      <ul>
        {todoState.todoList.map(el => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
